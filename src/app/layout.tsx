import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google"; // 👈 use Assistant instead
import { CartProvider } from "@/context/cart-context";
import Navbar from "@/components/store/navbar";
import Footer from "@/components/store/footer";
import SWRegister from "@/components/pwa/sw-register";
import GlobalImageRetry from "@/components/global-image-retry";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "מוצרי שיער – חנות אונליין",
  title: {
    default: "מוצרי שיער – חנות אונליין",
    template: "%s | מוצרי שיער",
  },
  description: "רכישת מוצרי שיער מקצועיים אונליין.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png" }, { url: "/icons/icon-512.png" }],
    shortcut: ["/icons/icon-192.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "מוצרי שיער",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${assistant.variable} antialiased bg-white text-neutral-900`}
      >
        <Navbar />
        <GlobalImageRetry />
        <SWRegister />
        {/* 👇 Use the dynamic CSS variable for spacing */}
        <main style={{ paddingTop: "var(--navbar-height, 64px)" }}>
          <CartProvider>{children}</CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
