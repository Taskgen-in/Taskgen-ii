"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Payment = {
  id: number;
  name: string;
  utr_number: string;
  screenshot_path: string;
  status: string;
  submitted_at: string;
};

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  const fetchPayments = async () => {
    const res = await fetch("/api/admin/payments");
    const data = await res.json();
    setPayments(data);
  };

  const handleStatus = async (id: number, newStatus: "verified" | "rejected") => {
    await fetch("/api/admin/payments", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    fetchPayments();
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Payment Verifications</h2>
      {payments.map(p => (
        <div key={p.id} className="border rounded p-4 mb-4">
          <p><strong>Name:</strong> {p.name}</p>
          <p><strong>UTR:</strong> {p.utr_number || "(Not Provided)"}</p>
          <p><strong>Status:</strong> {p.status}</p>
          {p.screenshot_path && (
            <Image src={p.screenshot_path} alt="Screenshot" width={300} height={300} />
          )}
          <div className="mt-2 space-x-2">
            <Button onClick={() => handleStatus(p.id, "verified")}>Approve</Button>
            <Button variant="destructive" onClick={() => handleStatus(p.id, "rejected")}>Reject</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
