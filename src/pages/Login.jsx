

import React, { useState, useEffect, useRef } from "react";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { gsap } from "gsap";
import axios from "axios";
import Swal from "sweetalert2";
import football from "../assets/image/Football_Pallo_valmiina-cropped_كوره-removebg-preview.png";
import useAuthStore from "../Store/authStore";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const navigate = useNavigate();
  const loginStore = useAuthStore((state) => state.login);

  const handleSubmit = (values) => {
    const { email, password, remember } = values;

    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password,
      })
      .then((res) => {
        const token = res.data.jwt;
        const user = res.data.user;

        if (remember) localStorage.setItem("token", token);
        else sessionStorage.setItem("token", token);

        loginStore(token, user);

        Swal.fire({
          title: "Login success",
          icon: "success",
        });

        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            err.response?.data?.error?.message ||
            "Invalid email or password",
        });
      });
  };

  useEffect(() => {
    const tl = gsap.timeline();

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
      .to([leftRef.current, rightRef.current], {
        scale: 1.5,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setShowForm(true),
      })
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
        "<"
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

      {/* الكرة المنقسمة */}
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
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20">
          <h2 className="text-3xl font-extrabold text-center text-green-700">
            Login
          </h2>

          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4 mt-6">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 font-medium">Password</label>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-green-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Field type="checkbox" name="remember" />
                <span>Remember me</span>
              </div>

              <button
                type="submit"
                className="btn bg-green-600 text-white mt-4"
              >
                Login
              </button>
            </Form>
          </Formik>

          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-600 font-semibold">
              Register
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
