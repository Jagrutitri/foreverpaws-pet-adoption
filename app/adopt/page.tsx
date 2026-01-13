// "use client";

// import { useState } from "react";

// export default function AdoptPage() {
//   const [form, setForm] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     message: "",
//     pet: "", // we will later connect real pet id
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setStatus("Submitting...");

//     try {
//       const res = await fetch("https://pub.sleekcms.com/1vzej/latest/entries/adoption_request", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_SLEEKCMS_API_TOKEN}`,
//         },

//         body: JSON.stringify({
//           model: "adoption_request",
//           entry: {
//             full_name: form.full_name,
//             email: form.email,
//             phone: form.phone,
//             message: form.message,
//             requestdate: new Date().toISOString(),
//             pet: form.pet || null, // optional for now
//           },
//         }),
//       });

//       if (!res.ok) throw new Error("Request failed");

//       setStatus("Request submitted successfully 🎉");
//       setForm({
//         full_name: "",
//         email: "",
//         phone: "",
//         message: "",
//         pet: "",
//       });
//     } catch (error) {
//       console.error(error);
//       setStatus("Submission failed ❌ Check console");
//     }
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">🐾 Adopt a Pet</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           name="full_name"
//           placeholder="Full Name"
//           value={form.full_name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           name="phone"
//           placeholder="Phone"
//           value={form.phone}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Message"
//           value={form.message}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           rows={3}
//         />

//         <input
//           name="pet"
//           placeholder="Pet ID (we will automate later)"
//           value={form.pet}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Submit Request
//         </button>
//       </form>

//       <p className="mt-4">{status}</p>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function AdoptPage() {
  const [submitted, setSubmitted] = useState<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setSubmitted({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      pet: e.target.pet.value,
      reason: e.target.reason.value,
    });
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🐾 Adopt a Pet</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Your Name" className="w-full p-2 border" />
        <input name="email" placeholder="Your Email" className="w-full p-2 border" />
        <input name="phone" placeholder="Phone Number" className="w-full p-2 border" />
        <input name="pet" placeholder="Pet Name" className="w-full p-2 border" />
        <textarea name="reason" placeholder="Reason for adoption" className="w-full p-2 border" />

        <button className="bg-orange-600 text-white w-full py-2 rounded">
          Submit Request
        </button>
      </form>

      {submitted && (
        <div className="mt-6 border p-3 rounded bg-black-100">
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Phone:</b> {submitted.phone}</p>
          <p><b>Pet:</b> {submitted.pet}</p>
          <p><b>Reason:</b> {submitted.reason}</p>
        </div>
      )}
    </div>
  );
}


