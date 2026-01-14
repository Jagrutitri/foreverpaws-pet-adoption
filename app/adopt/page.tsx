"use client";

import { useState } from "react";

export default function AdoptPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_SLEEKCMS_FORM_API as string,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Form submission failed");

      alert("Adoption request submitted 🎉");
    } catch (error) {
      console.error(error);
      alert("Submission failed ❌");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(#6ec6ff, #9fd3ff)",
        color: "black",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border text-black"
      >
        <h1 className="text-3xl font-bold text-center mb-4">
          🐾 Adoption Request
        </h1>

        <p className="text-center mb-6">
          Fill out the form below to begin your adoption journey
        </p>

        <label className="font-semibold">Full Name</label>
        <input
          name="name"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3 text-black"
          placeholder="Enter your name"
        />

        <label className="font-semibold">Email</label>
        <input
          name="email"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3 text-black"
          placeholder="Enter your email"
        />

        <label className="font-semibold">Phone</label>
        <input
          name="phone"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3 text-black"
          placeholder="Enter phone number"
        />

        <label className="font-semibold">Pet Name</label>
        <input
          name="petName"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3 text-black"
          placeholder="Which pet do you want to adopt?"
        />

        <label className="font-semibold">Why do you want to adopt?</label>
        <textarea
          name="message"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4 text-black"
          rows={4}
          placeholder="Write your reason"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded font-semibold"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

