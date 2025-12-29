


import React, { useState, useEffect, useRef } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { gsap } from "gsap";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import useAuthStore from "../Store/authStore";
import football from '../assets/image/Football_Pallo_valmiina-cropped_كوره-removebg-preview.png';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const formRef = useRef(null);

  const domain = "http://localhost:1337";
  const endPoint = "/api/auth/local/register";
  const navigate = useNavigate();
  const authStore = useAuthStore((state) => state);

  const validationSchema = Yup.object({
    name: Yup.string().required().min(4),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6).max(10),
  });

  const handleSubmit = (values) => {
    axios
      .post(domain + endPoint, {
        username: values.name,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        authStore.login(res.data.jwt, res.data.user);
        Swal.fire({ title: "Register success", icon: "success" });
        navigate("profile");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.error?.message || "Error occurred",
        });
      });
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // الكرة تنزل وتوصل النص وتنط 3 مرات
    tl.fromTo(
      [leftRef.current, rightRef.current],
      { y: -400, scale: 0.8 },
      { y: 0, scale: 1, duration: 1, ease: "bounce.out" }
    )
      .to([leftRef.current, rightRef.current], {
        y: -60,
        repeat: 3,
        yoyo: true,
        duration: 0.25,
      })
      // تكبير قبل الانقسام
      .to([leftRef.current, rightRef.current], {
        scale: 1.5,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setShowForm(true),
      })
      // الانقسام: نص يروح شمال ونص يروح يمين
      .to(leftRef.current, {
        x: "-150%",
        opacity: 0,
        duration: 1,
        ease: "power2.in",
      })
      .to(
        rightRef.current,
        {
          x: "150%",
          opacity: 0,
          duration: 1,
          ease: "power2.in",
        },
        "<" // يبدأ في نفس وقت تحريك النص الأيسر
      );
  }, []);

  return (
    <div className="min-h-screen bg-green-600 flex justify-center items-center relative overflow-hidden">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white text-green-700 px-4 py-2 rounded-xl shadow z-20"
      >
        ← Back to Home
      </Link>

      {/* الكرة منقسمة نصين */}
      {!showForm && (
        <>
          <div
            ref={leftRef}
            className="absolute w-32 h-32"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "hidden",
            }}
          >
            <img
              src={football}
              alt="left"
              className="w-full h-full object-contain"
              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }}
            />
          </div>

          <div
            ref={rightRef}
            className="absolute w-32 h-32"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "hidden",
            }}
          >
            <img
              src={football}
              alt="right"
              className="w-full h-full object-contain"
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
            />
          </div>
        </>
      )}

      {/* الفورم */}
      {showForm && (
        <div
          ref={formRef}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20 animate-fadeIn"
        >
          <h2 className="text-3xl font-extrabold text-center text-green-700">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and start your journey
          </p>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="input input-bordered border-green-500 outline-green-300 w-full"
                />
                <ErrorMessage
                  name="name"
                  component={"span"}
                  className="text-red-700"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="input input-bordered w-full border-green-500 outline-green-300"
                />
                <ErrorMessage
                  name="email"
                  component={"span"}
                  className="text-red-700"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 font-medium text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-12 border-green-500 outline-green-300"
                />
                <ErrorMessage
                  name="password"
                  component={"span"}
                  className="text-red-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-green-600 text-xl"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white mt-4 rounded-xl"
              >
                Create Account
              </button>
            </Form>
          </Formik>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

