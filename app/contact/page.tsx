"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    setSubmitted(data);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📩 Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your Name" className="w-full p-2 border" />
        <input name="email" placeholder="Your Email" className="w-full p-2 border" />
        <textarea name="message" placeholder="Message" className="w-full p-2 border" />

        <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {submitted && (
        <div className="mt-6 p-4 border rounded bg-black-100">
          <h2 className="text-xl font-semibold">Submitted Data</h2>
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Message:</b> {submitted.message}</p>
        </div>
      )}
    </div>
  );
}
