"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // UI-only for now
  };

  return (
    <footer className="w-full bg-white border-t border-neutral-200">
      {/* Join / Newsletter */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[999px] bg-neutral-50 border border-neutral-200 px-6 py-8 text-center">
          <h2 className="text-xl font-medium tracking-wide mb-3">
            הצטרפו אלינו
          </h2>
          <p className="text-sm text-neutral-600 mb-6">
            קבלו עדכונים על מבצעים, מוצרים חדשים והטבות בלעדיות.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              className="h-11 w-full sm:w-48 rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              autoComplete="name"
            />
            <input
              type="tel"
              name="phone"
              placeholder="טלפון"
              className="h-11 w-full sm:w-40 rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              autoComplete="tel"
              dir="ltr"
              inputMode="tel"
            />
            <input
              type="email"
              name="email"
              placeholder="אימייל"
              className="h-11 w-full sm:w-64 rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              autoComplete="email"
              dir="ltr"
              inputMode="email"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-neutral-900 px-6 text-sm text-white hover:opacity-90"
              aria-label="הצטרפות לרשימה"
            >
              שליחה
            </button>
          </form>
        </div>
      </section>

      {/* Links & Contact */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="דף הבית"
            >
              <Image
                src="/logo.png"
                alt="הלוגו של החנות"
                width={120}
                height={40}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-neutral-600 leading-6">
              מוצרי שיער מקצועיים באונליין – איכות, ניקיון עיצוב.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col gap-2 md:items-center">
            <h3 className="text-sm font-medium tracking-wide mb-2">
              ניווט מהיר
            </h3>
            <Link href="/" className="text-sm text-neutral-700 hover:underline">
              דף הבית
            </Link>
            <Link
              href="/store"
              className="text-sm text-neutral-700 hover:underline"
            >
              חנות
            </Link>
            <Link
              href="/categories"
              className="text-sm text-neutral-700 hover:underline"
            >
              קטגוריות
            </Link>
            <Link
              href="/contact"
              className="text-sm text-neutral-700 hover:underline"
            >
              צור קשר
            </Link>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-2 md:items-end">
            <h3 className="text-sm font-medium tracking-wide mb-2">
              יצירת קשר
            </h3>
            <a
              href="tel:0500000000"
              className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:underline"
              dir="ltr"
            >
              <Phone className="h-4 w-4" />
              050-000-0000
            </a>
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:underline"
              dir="ltr"
            >
              <Mail className="h-4 w-4" />
              info@example.com
            </a>
            <div className="inline-flex items-center gap-2 text-sm text-neutral-700">
              <MapPin className="h-4 w-4" />
              תל-אביב, ישראל
            </div>

            {/* Social — simple text links to avoid brand icon deps */}
            <div className="mt-3 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/"
                className="text-sm text-neutral-700 hover:underline"
                target="_blank"
              >
                אינסטגרם
              </Link>
              <Link
                href="https://www.tiktok.com/"
                className="text-sm text-neutral-700 hover:underline"
                target="_blank"
              >
                טיקטוק
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="text-sm text-neutral-700 hover:underline"
                target="_blank"
              >
                פייסבוק
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between text-xs text-neutral-600">
          <div>כל הזכויות שמורות © {new Date().getFullYear()}</div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:underline">
              מדיניות פרטיות
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms" className="hover:underline">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
