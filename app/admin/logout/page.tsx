"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    document.cookie = "admin_session=; Path=/; Max-Age=0";
    router.push("/admin/login");
  }, [router]);

  return <p className="p-6 text-center">Logging out...</p>;
}
