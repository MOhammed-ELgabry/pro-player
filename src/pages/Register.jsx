// import React, { useState, useEffect, useRef } from "react";
// import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { gsap } from "gsap";

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const ballRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => setShowForm(true),
//     });

//     // الكرة تنزل من فوق
//     tl.fromTo(
//       ballRef.current,
//       { y: -400, scale: 1 },
//       { y: 0, duration: 1, ease: "bounce.out" }
//     );

//     // الكرة تنط 3 مرات
//     tl.to(ballRef.current, {
//       y: -60,
//       duration: 0.3,
//       yoyo: true,
//       repeat: 3,
//       ease: "power1.inOut",
//     });

//     // الكرة تتوسع وتفتح تدريجياً
//     tl.to(ballRef.current, {
//       scale: 0,
//       duration: 1.5,
//       ease: "power2.inout",
//     });
//   }, []);

//   // دالة لإنشاء مربعات الكرة بشكل منظم
//   const renderSoccerBall = () => {
//     const size = 25; // حجم المربع
//     const colors = ["white", "black"];
//     const rows = 8;
//     const cols = 8;
//     let rects = [];
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         const colorIndex = (i + j) % 2; // يبدل بين الأبيض والأسود
//         rects.push(
//           <rect
//             key={`${i}-${j}`}
//             x={j * size}
//             y={i * size}
//             width={size}
//             height={size}
//             fill={colors[colorIndex]}
//           />
//         );
//       }
//     }
//     return rects;
//   };

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center px-4 relative">
//       {/* Go Home / Back Link */}
//       <Link
//         to="/"
//         className="absolute top-4 left-4 md:top-6 md:left-6
//                    flex items-center gap-2
//                    bg-white/90 hover:bg-white
//                    text-green-700 font-semibold
//                    px-4 py-2 rounded-xl shadow
//                    transition-all z-20"
//       >
//         ← Back to Home
//       </Link>

//       {/* كرة القدم مع GSAP animation */}
//       {!showForm && (
//         <div
//           ref={ballRef}
//           className="w-64 h-64 z-10"
//           style={{ borderRadius: "50%", overflow: "hidden" }}
//         >
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             {renderSoccerBall()}
//           </svg>
//         </div>
//       )}

//       {/* Register Card */}
//       {showForm && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20">
//           <h2 className="text-3xl font-extrabold text-center text-green-700">
//             Create Account
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Join us and start your journey
//           </p>

//           <Formik
//             initialValues={{
//               name: "",
//               email: "",
//               password: "",
//             }}
//             onSubmit={() => {}}
//           >
//             <Form className="flex flex-col gap-4">
//               {/* Name */}
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Name
//                 </label>
//                 <Field
//                   name="name"
//                   type="text"
//                   placeholder="Enter your name"
//                   className="input outline-green-300 border-green-300 input-bordered w-full"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Email
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="input outline-green-300 border-green-300 input-bordered w-full"
//                 />
//               </div>

//               {/* Password with toggle eye */}
//               <div className="relative">
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Password
//                 </label>
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className="input outline-green-300 border-green-300 w-full pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-9 text-green-600 text-xl"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="btn bg-green-600 hover:bg-green-700 text-white mt-4 rounded-xl"
//               >
//                 Create Account
//               </button>
//             </Form>
//           </Formik>

//           <p className="text-center text-sm text-gray-500 mt-6">
//             Already have an account?{" "}
//             <span className="text-green-600 font-semibold cursor-pointer">
//               Login
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { gsap } from "gsap";

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const ballRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => setShowForm(true),
//     });

//     // 1️⃣ الكرة تنزل من فوق
//     tl.fromTo(
//       ballRef.current,
//       { y: -400, scale: 1 },
//       { y: 0, duration: 1, ease: "bounce.out" }
//     );

//     // 2️⃣ تنط 3 مرات
//     tl.to(ballRef.current, {
//       y: -60,
//       duration: 0.3,
//       yoyo: true,
//       repeat: 3,
//       ease: "power1.inOut",
//     });

//     // 3️⃣ تتفرد كأنها ورقة
//     tl.to(ballRef.current, {
//       scaleX: 2.2,
//       scaleY: 0.25,
//       borderRadius: "16px",
//       duration: 1,
//       ease: "power3.inOut",
//     });
//   }, []);

//   // رسم الكرة
//   const renderSoccerBall = () => {
//     const size = 25;
//     const rows = 8;
//     const cols = 8;
//     let rects = [];

//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         rects.push(
//           <rect
//             key={`${i}-${j}`}
//             x={j * size}
//             y={i * size}
//             width={size}
//             height={size}
//             fill={(i + j) % 2 === 0 ? "white" : "black"}
//           />
//         );
//       }
//     }
//     return rects;
//   };

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center px-4 relative overflow-hidden">
//       {/* Back */}
//       <Link
//         to="/"
//         className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-xl font-semibold text-green-700 shadow z-20"
//       >
//         ← Back to Home
//       </Link>

//       {/* الكرة */}
//       {!showForm && (
//         <div
//           ref={ballRef}
//           className="w-64 h-64 z-10 bg-white shadow-2xl"
//           style={{
//             borderRadius: "50%",
//             overflow: "hidden",
//             transformOrigin: "center",
//           }}
//         >
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             {renderSoccerBall()}
//           </svg>
//         </div>
//       )}

//       {/* الفورم */}
//       {showForm && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20 animate-fadeIn">
//           <h2 className="text-3xl font-extrabold text-center text-green-700">
//             Create Account
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Join us and start your journey
//           </p>

//           <Formik
//             initialValues={{ name: "", email: "", password: "" }}
//             onSubmit={() => {}}
//           >
//             <Form className="flex flex-col gap-4">
//               <Field
//                 name="name"
//                 placeholder="Name"
//                 className="input input-bordered w-full"
//               />

//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 className="input input-bordered w-full"
//               />

//               <div className="relative">
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   className="input input-bordered w-full pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               <button className="btn bg-green-600 text-white rounded-xl mt-2">
//                 Create Account
//               </button>
//             </Form>
//           </Formik>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { gsap } from "gsap";

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const ballRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => setShowForm(true),
//     });

//     tl.fromTo(
//       ballRef.current,
//       { y: -300, scale: 1 },
//       { y: 0, duration: 1.2, ease: "bounce.out" }
//     );

//     tl.to(ballRef.current, {
//       y: -70,
//       repeat: 3,
//       yoyo: true,
//       duration: 0.35,
//       ease: "power1.inOut",
//     });

//     tl.to(ballRef.current, {
//       scaleX: 2.5,
//       scaleY: 0.2,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.inOut",
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center relative overflow-hidden px-4">
//       {/* Back */}
//       <Link
//         to="/"
//         className="absolute top-4 left-4 bg-white/90 hover:bg-white
//                    text-green-700 font-semibold px-4 py-2 rounded-xl shadow z-30"
//       >
//         ← Back to Home
//       </Link>

//       {/* ⚽ Soccer Ball */}
//       {!showForm && (
//         <div
//           ref={ballRef}
//           className="w-72 h-72 z-20"
//           style={{ borderRadius: "50%", overflow: "hidden" }}
//         >
//           <svg viewBox="0 0 300 300" className="w-full h-full">
//             {/* 3D base */}
//             <defs>
//               <radialGradient id="ballLight" cx="30%" cy="30%">
//                 <stop offset="0%" stopColor="#ffffff" />
//                 <stop offset="60%" stopColor="#f0f0f0" />
//                 <stop offset="100%" stopColor="#cfcfcf" />
//               </radialGradient>
//             </defs>

//             <circle cx="150" cy="150" r="150" fill="url(#ballLight)" />

//             {/* Central pentagon */}
//             <polygon
//               points="150,90 185,115 170,160 130,160 115,115"
//               fill="#111"
//             />

//             {/* Surrounding pentagons */}
//             <polygon points="90,130 120,150 110,185 75,185 65,150" fill="#111" />
//             <polygon points="210,130 235,150 225,185 190,185 180,150" fill="#111" />
//             <polygon points="130,200 150,225 135,260 100,260 90,225" fill="#111" />
//             <polygon points="170,200 200,225 185,260 150,260 135,225" fill="#111" />

//             {/* Shadow */}
//             <ellipse
//               cx="180"
//               cy="200"
//               rx="120"
//               ry="120"
//               fill="rgba(0,0,0,0.08)"
//             />
//           </svg>
//         </div>
//       )}

//       {/* 🧾 Form */}
//       {showForm && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-30">
//           <h2 className="text-3xl font-extrabold text-center text-green-700">
//             Create Account
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Join us and start your journey
//           </p>

//           <Formik
//             initialValues={{ name: "", email: "", password: "" }}
//             onSubmit={() => {}}
//           >
//             <Form className="flex flex-col gap-4">
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Name
//                 </label>
//                 <Field
//                   name="name"
//                   className="input input-bordered w-full border-green-300"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Email
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   className="input input-bordered w-full border-green-300"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div className="relative">
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Password
//                 </label>
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full pr-12 border-green-300"
//                   placeholder="Enter your password"
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
//                 Create Account
//               </button>
//             </Form>
//           </Formik>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { gsap } from "gsap";

// /* ===== Soccer Ball SVG ===== */
// const SoccerBall = () => (
//   <svg viewBox="0 0 200 200" className="w-full h-full">
//     <defs>
//       {/* إضاءة 3D وهمية */}
//       <radialGradient id="ballLight" cx="30%" cy="30%" r="70%">
//         <stop offset="0%" stopColor="#ffffff" />
//         <stop offset="100%" stopColor="#d1d5db" />
//       </radialGradient>
//     </defs>

//     {/* جسم الكرة */}
//     <circle cx="100" cy="100" r="95" fill="url(#ballLight)" />

//     {/* مخمسات سوداء */}
//     <polygon points="100,32 122,48 114,74 86,74 78,48" fill="#111" />
//     <polygon points="45,78 67,94 59,120 33,120 25,94" fill="#111" />
//     <polygon points="155,78 177,94 169,120 143,120 135,94" fill="#111" />
//     <polygon points="100,138 122,154 114,180 86,180 78,154" fill="#111" />

//     {/* سداسيات بيضاء متداخلة */}
//     <polygon points="78,48 100,32 122,48 114,74 86,74" fill="#111" />
//     <polygon points="25,94 45,78 67,94 59,120 33,120" fill="#111" />
//     <polygon points="135,94 155,78 177,94 169,120 143,120" fill="#111" />

//     {/* ظل خارجي */}
//     <circle
//       cx="100"
//       cy="100"
//       r="95"
//       fill="none"
//       stroke="#000"
//       strokeOpacity="0.15"
//       strokeWidth="4"
//     />
//   </svg>
// );

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const ballRef = useRef(null);

//   /* ===== GSAP Animation ===== */
//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => setShowForm(true),
//     });

//     // نزول الكرة
//     tl.fromTo(
//       ballRef.current,
//       { y: -400, scale: 0.8 },
//       { y: 0, scale: 1, duration: 1, ease: "bounce.out" }
//     );

//     // نط 3 مرات
//     tl.to(ballRef.current, {
//       y: -60,
//       repeat: 3,
//       yoyo: true,
//       duration: 0.25,
//       ease: "power1.inOut",
//     });

//     // لف 360 درجة
//     tl.to(ballRef.current, {
//       rotation: 360,
//       duration: 1,
//       ease: "power2.inOut",
//     });

//     // تفريد زي الورقة
//     tl.to(ballRef.current, {
//       scaleX: 3,
//       scaleY: 0.2,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power4.inOut",
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center px-4 relative overflow-hidden">
//       {/* Back to Home */}
//       <Link
//         to="/"
//         className="absolute top-4 left-4 md:top-6 md:left-6
//                    bg-white/90 hover:bg-white
//                    text-green-700 font-semibold
//                    px-4 py-2 rounded-xl shadow z-20"
//       >
//         ← Back to Home
//       </Link>

//       {/* Soccer Ball */}
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

//       {/* Register Form */}
//       {showForm && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20 animate-fadeIn">
//           <h2 className="text-3xl font-extrabold text-center text-green-700">
//             Create Account
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Join us and start your journey
//           </p>

//           <Formik
//             initialValues={{ name: "", email: "", password: "" }}
//             onSubmit={() => {}}
//           >
//             <Form className="flex flex-col gap-4">
//               {/* Name */}
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Name
//                 </label>
//                 <Field
//                   name="name"
//                   type="text"
//                   className="input input-bordered w-full"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Email
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   className="input input-bordered w-full"
//                 />
//               </div>

//               {/* Password */}
//               <div className="relative">
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Password
//                 </label>
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full pr-12"
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
//                 Create Account
//               </button>
//             </Form>
//           </Formik>

//           <p className="text-center text-sm text-gray-500 mt-6">
//             Already have an account?{" "}
//             <span className="text-green-600 font-semibold cursor-pointer">
//               Login
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { gsap } from "gsap";

// /* ===== Soccer Ball SVG ===== */
// const SoccerBall = () => (
//   <svg viewBox="0 0 200 200" className="w-full h-full">
//     <defs>
//       <radialGradient id="ballLight" cx="30%" cy="30%" r="70%">
//         <stop offset="0%" stopColor="#ffffff" />
//         <stop offset="100%" stopColor="#d1d5db" />
//       </radialGradient>
//     </defs>

//     {/* جسم الكرة */}
//     <circle cx="100" cy="100" r="95" fill="url(#ballLight)" />

//     {/* مخمسات سوداء منتظمة */}
//     <g fill="#111">
//       {/* أعلى */}
//       <polygon points="100,28 120,42 112,66 88,66 80,42" />
//       {/* أسفل */}
//       <polygon points="100,134 120,150 112,174 88,174 80,150" />

//       {/* يمين */}
//       <polygon points="160,80 180,94 172,118 148,118 140,94" />
//       {/* يسار */}
//       <polygon points="40,80 60,94 52,118 28,118 20,94" />

//       {/* أعلى يمين */}
//       <polygon points="140,48 158,60 152,82 128,82 122,60" />
//       {/* أعلى يسار */}
//       <polygon points="60,48 78,60 72,82 48,82 42,60" />

//       {/* أسفل يمين */}
//       <polygon points="140,118 158,132 152,154 128,154 122,132" />
//       {/* أسفل يسار */}
//       <polygon points="60,118 78,132 72,154 48,154 42,132" />
//     </g>

//     {/* إطار خفيف */}
//     <circle
//       cx="100"
//       cy="100"
//       r="95"
//       fill="none"
//       stroke="#000"
//       strokeOpacity="0.15"
//       strokeWidth="4"
//     />
//   </svg>
// );

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const ballRef = useRef(null);

//   /* ===== GSAP Animation ===== */
//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => setShowForm(true),
//     });

//     // نزول الكرة
//     tl.fromTo(
//       ballRef.current,
//       { y: -400, scale: 0.8 },
//       { y: 0, scale: 1, duration: 1, ease: "bounce.out" }
//     );

//     // نط 3 مرات
//     tl.to(ballRef.current, {
//       y: -60,
//       repeat: 3,
//       yoyo: true,
//       duration: 0.25,
//       ease: "power1.inOut",
//     });

//     // لف 360 درجة
//     tl.to(ballRef.current, {
//       rotation: 360,
//       duration: 1,
//       ease: "power2.inOut",
//     });

//     // تفريد زي الورقة
//     tl.to(ballRef.current, {
//       scaleX: 3,
//       scaleY: 0.2,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power4.inOut",
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-600 flex justify-center items-center px-4 relative overflow-hidden">
//       {/* Back to Home */}
//       <Link
//         to="/"
//         className="absolute top-4 left-4 md:top-6 md:left-6
//                    bg-white/90 hover:bg-white
//                    text-green-700 font-semibold
//                    px-4 py-2 rounded-xl shadow z-20"
//       >
//         ← Back to Home
//       </Link>

//       {/* Soccer Ball */}
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

//       {/* Register Form */}
//       {showForm && (
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20">
//           <h2 className="text-3xl font-extrabold text-center text-green-700">
//             Create Account
//           </h2>
//           <p className="text-center text-gray-500 mb-6">
//             Join us and start your journey
//           </p>

//           <Formik
//             initialValues={{ name: "", email: "", password: "" }}
//             onSubmit={() => {}}
//           >
//             <Form className="flex flex-col gap-4">
//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Name
//                 </label>
//                 <Field
//                   name="name"
//                   type="text"
//                   className="input input-bordered w-full"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Email
//                 </label>
//                 <Field
//                   name="email"
//                   type="email"
//                   className="input input-bordered w-full"
//                 />
//               </div>

//               <div className="relative">
//                 <label className="block mb-1 font-medium text-gray-700">
//                   Password
//                 </label>
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full pr-12"
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
//                 Create Account
//               </button>
//             </Form>
//           </Formik>

//           <p className="text-center text-sm text-gray-500 mt-6">
//             Already have an account?{" "}
//             <span className="text-green-600 font-semibold cursor-pointer">
//               Login
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// دي اقرب واحده

import React, { useState, useEffect, useRef } from "react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { gsap } from "gsap";

/* ===== Soccer Ball SVG Component ===== */
const SoccerBall = () => {
  // إنشاء مربعات الكرة بشكل منظم
  const size = 40; // حجم كل خماسي
  const polygons = [
    // نقاط تقريبية للخماسيات (للتوضيح فقط)
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

      {/* الكرة نفسها */}
      <circle cx="100" cy="100" r="95" fill="url(#ballLight)" />

      {/* الخماسيات */}
      {polygons.map((poly, idx) => (
        <polygon key={idx} points={poly.points} fill={poly.fill} />
      ))}

      {/* ظل خارجي */}
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

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const ballRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowForm(true),
    });

    // نزول الكرة
    tl.fromTo(
      ballRef.current,
      { y: -400, scale: 0.8, rotateX: 0, rotateY: 0 },
      { y: 0, scale: 1, duration: 1, ease: "bounce.out" }
    );

    // نط 3 مرات
    tl.to(ballRef.current, {
      y: -60,
      repeat: 3,
      yoyo: true,
      duration: 0.25,
      ease: "power1.inOut",
    });

    // لف 360° ثلاثي الأبعاد
    tl.to(ballRef.current, {
      rotateY: 360,
      rotateX: 180,
      duration: 1,
      ease: "power2.inOut",
    });

    // تفريد الكرة زي الورقة
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
      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-4 left-4 md:top-6 md:left-6
                   bg-white/90 hover:bg-white
                   text-green-700 font-semibold
                   px-4 py-2 rounded-xl shadow z-20"
      >
        ← Back to Home
      </Link>

      {/* Soccer Ball */}
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

      {/* Register Form */}
      {showForm && (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 z-20 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-center text-green-700">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and start your journey
          </p>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={() => {}}
          >
            <Form className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="input input-bordered border-green-500 outline-green-300 w-full"
                />
              </div>

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
           <p className="text-center text-sm text-gray-500 mt-6">
  Already have an account?{" "}
  <Link to="/login" className="text-green-600 font-semibold hover:underline">
    Login
  </Link>
</p>

          </p>
        </div>
      )}
    </div>
  );
}


