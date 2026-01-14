"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
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

    await fetch(process.env.NEXT_PUBLIC_SLEEKCMS_FORM_API as string, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    alert("Message submitted successfully!");
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(#6ec6ff,#9fd3ff)" }}
    >
      {/* 🌟 NAVBAR */}
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-black">ForeverPaws</h1>

          <div className="space-x-6 font-medium text-black">
            <Link href="/">Home</Link>
            <Link href="/adopt">Adopt</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav>

      {/* 💙 MAIN CONTACT SECTION */}
      <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT — FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-center text-black">
            Send Us A Message
          </h1>

          <p className="text-center mb-6 text-black">
            Fill the form & our team will connect with you soon
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                onChange={handleChange}
                className="border p-3 rounded text-black"
                placeholder="Full Name"
              />
              <input
                name="email"
                onChange={handleChange}
                className="border p-3 rounded text-black"
                placeholder="Email Address"
              />
              <input
                name="phone"
                onChange={handleChange}
                className="border p-3 rounded text-black"
                placeholder="Phone Number"
              />
              <input
                name="petName"
                onChange={handleChange}
                className="border p-3 rounded text-black"
                placeholder="Pet Name"
              />
            </div>

            <textarea
              name="message"
              onChange={handleChange}
              className="border p-3 rounded w-full mt-4 text-black"
              rows={5}
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — SOCIAL INFO */}
        <div className="bg-blue-500 rounded-2xl shadow-xl p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Online Presence</h2>

          <p className="mb-6">
            Connect with us for adoption updates, events & pet care tips
          </p>

          <div className="space-y-4 text-lg">
            <p>📧 hello@foreverpaws.in</p>
            <p>🐾 Instagram: @foreverpaws</p>
            <p>📘 Facebook: ForeverPaws</p>
            <p>⏰ 10 AM – 7 PM</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-blue-500 text-white py-16 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">Let's stay connected</h3>
            <p>Follow us for adoption activities & updates</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
            <p>Donate</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Looking to adopt?</h3>
            <p>📧 hello@foreverpaws.in</p>
            <p>⏰ 10 AM – 7 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
