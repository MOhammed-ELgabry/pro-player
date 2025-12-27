// import { Field, Form, Formik } from "formik";
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center relative px-4">

//         <Link
//   to="/"
//   className="absolute top-4 left-4 md:top-6 md:left-6
//              flex items-center gap-2
//              bg-white/90 hover:bg-white
//              text-green-700 font-semibold
//              px-4 py-2 rounded-xl shadow
//              transition-all"
// >
//   ← Back to Home
// </Link>

//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-center text-green-700">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to continue your journey
//         </p>

//         <Formik
//           initialValues={{
//             email: "",
//             password: "",
//             rememberMe: false,
//           }}
//           onSubmit={() => {}}
//         >
//           <Form className="flex flex-col gap-4">
//             {/* Email */}
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Email
//               </label>
//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full border-green-300 focus:outline-green-400"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Password
//               </label>
//               <Field
//                 name="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full border-green-300 focus:outline-green-400"
//               />
//             </div>

//             {/* Remember me */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <Field
//                   type="checkbox"
//                   name="rememberMe"
//                   className="checkbox checkbox-success"
//                 />
//                 <span className="text-sm text-gray-600">
//                   Remember me
//                 </span>
//               </label>

//               <span className="text-sm text-green-600 cursor-pointer hover:underline">
//                 Forgot password?
//               </span>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="btn bg-green-600 hover:bg-green-700 text-white mt-4 rounded-xl"
//             >
//               Login
//             </button>
//           </Form>
//         </Formik>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <span className="text-green-600 font-semibold cursor-pointer">
//             Create one
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// import { Field, Form, Formik } from "formik";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center relative px-4">
//       {/* Go Home / Back Link */}
//       <Link
//         to="/"
//         className="absolute top-4 left-4 md:top-6 md:left-6
//                    flex items-center gap-2
//                    bg-white/90 hover:bg-white
//                    text-green-700 font-semibold
//                    px-4 py-2 rounded-xl shadow
//                    transition-all"
//       >
//         ← Back to Home
//       </Link>

//       {/* Login Card */}
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-center text-green-700">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to continue your journey
//         </p>

//         <Formik
//           initialValues={{
//             email: "",
//             password: "",
//             rememberMe: false,
//           }}
//           onSubmit={() => {}}
//         >
//           <Form className="flex flex-col gap-4">
//             {/* Email */}
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">
//                 Email
//               </label>
//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full border-green-300 focus:outline-green-400"
//               />
//             </div>

//             {/* Password with toggle eye */}
//             <div className="relative">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Password
//               </label>
//               <Field
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full border-green-300 focus:outline-green-400 pr-12"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-9 text-green-600 text-xl"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>

//             {/* Remember me */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <Field
//                   type="checkbox"
//                   name="rememberMe"
//                   className="checkbox checkbox-success"
//                 />
//                 <span className="text-sm text-gray-600">
//                   Remember me
//                 </span>
//               </label>

//               <span className="text-sm text-green-600 cursor-pointer hover:underline">
//                 Forgot password?
//               </span>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="btn bg-green-600 hover:bg-green-700 text-white mt-4 rounded-xl"
//             >
//               Login
//             </button>
//           </Form>
//         </Formik>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <span className="text-green-600 font-semibold cursor-pointer">
//             Create one
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { gsap } from "gsap";

// /* ===== Soccer Ball SVG Component ===== */
// const SoccerBall = () => {
//   const size = 40;
//   const polygons = [
//     { points: "100,20 120,40 110,70 90,70 80,40", fill: "black" },
//     { points: "40,80 60,100 50,130 30,130 20,100", fill: "black" },
//     { points: "160,80 180,100 170,130 150,130 140,100", fill: "black" },
//     { points: "100,140 120,160 110,190 90,190 80,160", fill: "black" },
//     { points: "70,40 100,20 130,40 120,70 80,70", fill: "black" },
//     { points: "20,100 40,80 70,100 60,130 30,130", fill: "black" },
//     { points: "140,100 160,80 190,100 180,130 150,130", fill: "black" },
//   ];

//   return (
//     <svg viewBox="0 0 200 200" className="w-full h-full">
//       <defs>
//         <radialGradient id="ballLight" cx="30%" cy="30%" r="70%">
//           <stop offset="0%" stopColor="#fff" />
//           <stop offset="100%" stopColor="#d1d5db" />
//         </radialGradient>
//       </defs>
//       <circle cx="100" cy="100" r="95" fill="url(#ballLight)" />
//       {polygons.map((poly, idx) => (
//         <polygon key={idx} points={poly.points} fill={poly.fill} />
//       ))}
//       <circle
//         cx="100"
//         cy="100"
//         r="95"
//         fill="none"
//         stroke="#000"
//         strokeOpacity="0.15"
//         strokeWidth="4"
//       />
//     </svg>
//   );
// };

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const ballRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ onComplete: () => setShowForm(true) });

//     tl.fromTo(
//       ballRef.current,
//       { y: -400, scale: 0.8, rotateX: 0, rotateY: 0 },
//       { y: 0, scale: 1, duration: 1, ease: "bounce.out" }
//     );

//     tl.to(ballRef.current, {
//       y: -60,
//       repeat: 3,
//       yoyo: true,
//       duration: 0.25,
//       ease: "power1.inOut",
//     });

//     tl.to(ballRef.current, {
//       rotateY: 360,
//       rotateX: 180,
//       duration: 1,
//       ease: "power2.inOut",
//     });

//     tl.to(ballRef.current, {
//       scaleX: 3,
//       scaleY: 0.2,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power4.inOut",
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center px-4 relative overflow-hidden perspective-800">
//       <Link
//         to="/"
//         className="absolute top-4 left-4 md:top-6 md:left-6
//                    bg-white/90 hover:bg-white
//                    text-green-700 font-semibold
//                    px-4 py-2 rounded-xl shadow z-20"
//       >
//         ← Back to Home
//       </Link>

//       {!showForm && (
//         <div
//           ref={ballRef}
//           className="w-64 h-64 z-10"
//           style={{
//             borderRadius: "50%",
//             transformStyle: "preserve-3d",
//           }}
//         >
//           <SoccerBall />
//         </div>
//       )}

//       {showForm && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20 animate-fadeIn">
//           <h2 className="text-3xl font-extrabold text-center text-green-700">
//             Login
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Welcome back! Please login to your account
//           </p>

//           <Formik
//             initialValues={{ email: "", password: "" }}
//             onSubmit={() => {}}
//           >
//             <Form className="flex flex-col gap-4">
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Email
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   className="input input-bordered border-green-500 w-full outline-green-300"
//                 />
//               </div>

//               <div className="relative">
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Password
//                 </label>
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered outline-green-300 border-green-500 w-full pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-9 text-green-600 text-xl"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="btn bg-green-600 hover:bg-green-700 text-white mt-4 rounded-xl"
//               >
//                 Login
//               </button>
//             </Form>
//           </Formik>

//           <p className="text-center text-sm text-gray-500 mt-6">
//             Don't have an account?{" "}
//             <span className="text-green-600 font-semibold cursor-pointer">
//               Register
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { gsap } from "gsap";

/* ===== Soccer Ball SVG Component ===== */
const SoccerBall = () => {
  const size = 40;
  const polygons = [
    { points: "100,20 120,40 110,70 90,70 80,40", fill: "black" },
    { points: "40,80 60,100 50,130 30,130 20,100", fill: "black" },
    { points: "160,80 180,100 170,130 150,130 140,100", fill: "black" },
    { points: "100,140 120,160 110,190 90,190 80,160", fill: "black" },
    { points: "70,40 100,20 130,40 120,70 80,70", fill: "black" },
    { points: "20,100 40,80 70,100 60,130 30,130", fill: "black" },
    { points: "140,100 160,80 190,100 180,130 150,130", fill: "black" },
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="ballLight" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#d1d5db" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="95" fill="url(#ballLight)" />
      {polygons.map((poly, idx) => (
        <polygon key={idx} points={poly.points} fill={poly.fill} />
      ))}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="#000"
        strokeOpacity="0.15"
        strokeWidth="4"
      />
    </svg>
  );
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const ballRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowForm(true),
    });

    tl.fromTo(
      ballRef.current,
      { y: -400, scale: 0.8, rotateX: 0, rotateY: 0 },
      { y: 0, scale: 1, duration: 1, ease: "bounce.out" }
    );

    tl.to(ballRef.current, {
      y: -60,
      repeat: 3,
      yoyo: true,
      duration: 0.25,
      ease: "power1.inOut",
    });

    tl.to(ballRef.current, {
      rotateY: 360,
      rotateX: 180,
      duration: 1,
      ease: "power2.inOut",
    });

    tl.to(ballRef.current, {
      scaleX: 3,
      scaleY: 0.2,
      opacity: 0,
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen bg-green-600 flex justify-center items-center px-4 relative overflow-hidden perspective-800">
      <Link
        to="/"
        className="absolute top-4 left-4 md:top-6 md:left-6
                   bg-white/90 hover:bg-white
                   text-green-700 font-semibold
                   px-4 py-2 rounded-xl shadow z-20"
      >
        ← Back to Home
      </Link>

      {!showForm && (
        <div
          ref={ballRef}
          className="w-64 h-64 z-10"
          style={{
            borderRadius: "50%",
            transformStyle: "preserve-3d",
          }}
        >
          <SoccerBall />
        </div>
      )}

      {showForm && (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-center text-green-700">
            Login
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please login to your account.
          </p>

          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            onSubmit={() => {}}
          >
            <Form className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="input input-bordered w-full border-green-500 outline-green-300"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block mb-1 font-medium text-gray-700">
                  Password
                </label>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-12 border-green-500 outline-green-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-green-600 text-xl"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-2">
                <Field
                  type="checkbox"
                  name="remember"
                  className="w-4 h-4 text-green-600 border-green-500 rounded focus:ring-green-500"
                />
                <label className="text-gray-700 font-medium">Remember me</label>
              </div>

              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white mt-4 rounded-xl"
              >
                Login
              </button>
            </Form>
          </Formik>

          {/* Link to Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
