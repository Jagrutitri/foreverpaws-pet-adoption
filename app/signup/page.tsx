// "use client";

// import { useState } from "react";

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(
//         process.env.NEXT_PUBLIC_SLEEKCMS_FORM_API as string,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             form_type: "signup",
//             ...formData,
//           }),
//         }
//       );

//       if (!res.ok) throw new Error("Submit failed");

//       alert("Signup form submitted 🎉");
//     } catch (err) {
//       console.error(err);
//       alert("Signup failed ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center"
//       style={{ background: "linear-gradient(#6ec6ff, #9fd3ff)" }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border text-black"
//       >
//         <h1 className="text-3xl font-bold text-center mb-4">📝 Create Account</h1>

//         <label>Full Name</label>
//         <input
//           name="fullName"
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           placeholder="Your name"
//         />

//         <label>Email</label>
//         <input
//           name="email"
//           type="email"
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           placeholder="Your email"
//         />

//         <label>Password</label>
//         <input
//           name="password"
//           type="password"
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           placeholder="Create password"
//         />

//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SLEEKCMS_FORM_API as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "signup",
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      alert("Signup successful 🎉");

      // ⭐ redirect after signup
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Signup failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(#6ec6ff, #9fd3ff)" }}
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border text-black">

        <h1 className="text-3xl font-bold text-center mb-4">📝 Create Account</h1>

        <label>Full Name</label>
        <input name="fullName" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <label>Email</label>
        <input name="email" type="email" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}
