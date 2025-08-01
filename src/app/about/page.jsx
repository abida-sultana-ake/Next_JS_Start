"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function () {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="text-3xl text-cyan-900">About</p>
      <p>
        <Link href="/about/address">Address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        On mood
      </button>
    </div>
  );
}