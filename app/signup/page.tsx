// export default function SignupPage() {
//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-3xl font-bold mb-6">📝 Create Account</h1>

//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border rounded"
//         />

//         <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setSubmitted({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">📝 Create Account</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Full Name" className="w-full p-2 border" />
        <input name="email" placeholder="Email" className="w-full p-2 border" />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border" />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Sign Up
        </button>
      </form>

      {submitted && (
        <div className="mt-6 border p-3 rounded bg-black-100">
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Password:</b> {submitted.password}</p>
        </div>
      )}
    </div>
  );
}
