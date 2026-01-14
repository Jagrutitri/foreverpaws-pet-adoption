"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
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
          form_type: "login",
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      alert("Login successful 🎉");

      // ⭐ redirect after login
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(#6ec6ff, #9fd3ff)" }}
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border text-black">

        <h1 className="text-3xl font-bold text-center mb-4">🔐 Login</h1>

        <label>Email</label>
        <input name="email" type="email" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} className="w-full p-2 border rounded mb-4" />

        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}

