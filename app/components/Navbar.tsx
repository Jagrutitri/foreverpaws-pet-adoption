"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow">
      <h1 className="text-2xl font-bold">🐾 ForeverPaws</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </nav>
  );
}
