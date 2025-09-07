"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${ref.current!.offsetHeight}px`
      );
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="דף הבית">
          <Image
            src="/logo.png"
            alt="הלוגו של החנות"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm text-neutral-800 hover:underline"
          >
            אודות
          </Link>

          <Link href="/cart" className="relative" aria-label="עגלת קניות">
            <ShoppingCart className="h-6 w-6 text-gray-800" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
