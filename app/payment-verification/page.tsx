"use client";
import { useState } from "react";

export default function PaymentVerificationPage() {
  const [form, setForm] = useState({ name: "", utrNumber: "", screenshotUrl: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/payment-verification", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    setStatus(result.message || "Submitted");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Verify Your Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Your Name" className="border p-2 w-full" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="UTR Number (Optional)" className="border p-2 w-full" onChange={e => setForm({ ...form, utrNumber: e.target.value })} />
        <input placeholder="Screenshot URL (Optional)" className="border p-2 w-full" onChange={e => setForm({ ...form, screenshotUrl: e.target.value })} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
