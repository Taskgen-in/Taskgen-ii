"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VerifyPaymentPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", utrNumber: "" });
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [userEmail, setUserEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const reg = sessionStorage.getItem("pendingRegistration");
    if (reg) {
      const data = JSON.parse(reg);
      setForm(prev => ({ ...prev, name: data.name }));
      setUserEmail(data.email || "");
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("utrNumber", form.utrNumber);
    if (screenshotFile) {
      formData.append("screenshot", screenshotFile);
    }

    const res = await fetch("/api/payment-verification", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Submitted for verification!");
      setTimeout(() => router.push("/register/success"), 1500);
    } else {
      setStatus("Error: " + result.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Verify Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <div>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label>PhonePe UTR Number</Label>
              <Input
                placeholder="e.g., P2A234567..."
                value={form.utrNumber}
                onChange={e => setForm({ ...form, utrNumber: e.target.value })}
              />
            </div>
            <div>
              <Label>Upload Screenshot</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={e => setScreenshotFile(e.target.files?.[0] || null)}
              />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
            {status && <p className="text-green-600 text-sm text-center">{status}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
