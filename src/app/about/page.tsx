import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Heart, Leaf, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "אודות החנות – מוצרי שיער מקצועיים, שירות אישי ואמין, ואיכות ללא פשרות.",
};

export default function AboutPage() {
  const values = [
    {
      icon: (
        <Shield className="h-16 w-16" strokeWidth={1.25} aria-hidden="true" />
      ),
      title: "איכות ללא פשרות",
      text: "מותגים נבחרים, רכיבים איכותיים, ותוצאות שמחזיקות מעמד — כי לשיער שלכם מגיע הטוב ביותר תמיד.",
    },
    {
      icon: (
        <Heart className="h-16 w-16" strokeWidth={1.25} aria-hidden="true" />
      ),
      title: "שירות עם לב",
      text: "ייעוץ מותאם אישית וזמינות גבוהה, עם יחס אנושי שממשיך גם אחרי הרכישה.",
    },
    {
      icon: (
        <CheckCircle2
          className="h-16 w-16"
          strokeWidth={1.25}
          aria-hidden="true"
        />
      ),
      title: "אמינות ושקיפות",
      text: "מידע ברור על רכיבים, שימוש ומחירים — בלי אותיות קטנות ובלי טריקים.",
    },
    {
      icon: (
        <Leaf className="h-16 w-16" strokeWidth={1.25} aria-hidden="true" />
      ),
      title: "איזון וחוסן",
      text: "בחירה אחראית למלא שיער בריא ועור רגוע לאורך זמן — עדין, מדויק, עובד.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ===== Full-bleed Hero Image with Overlay Title ===== */}
      <section className="relative w-full">
        <div className="group relative h-[46vh] min-h-[340px] w-full overflow-hidden md:h-[64vh]">
          <Image
            src="/images/about.jpg"
            alt="הצצה מאחורי הקלעים – מוצרי שיער באיכות גבוהה"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/55 via-white/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 drop-shadow-sm">
                Hair Products
              </h1>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/85 px-5 py-2 text-sm text-neutral-800 backdrop-blur-sm animate-pulse">
                <span>איכות • טיפוח • ברק</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Text ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h2 className="mb-5 text-center text-3xl md:text-4xl font-semibold tracking-tight">
          אודותינו
        </h2>

        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-lg md:text-xl leading-9 text-neutral-700">
            אנחנו מאמינים שיופי מתחיל בתחושת ביטחון. כשאתם יודעים שהשיער שלכם
            מקבל את מה שמתאים לו—זה נראה ומרגיש אחרת.
          </p>

          <p className="text-lg md:text-xl leading-9 text-neutral-700">
            אנחנו ב-
            <span dir="ltr" className="font-semibold">
              hair products
            </span>{" "}
            מאמינים בטיפוח חכם: בחירה מדויקת של מוצרים מקצועיים, כלים נכונים,
            ושירות שמדבר בגובה העיניים. בלי רעש. בלי טריקים. רק תוצאות שמורגשות
            ביום־יום.
          </p>

          <p className="text-lg md:text-xl leading-9 text-neutral-700">
            המטרה שלנו פשוטה: להפוך את הטיפוח לחוויה מדויקת—נקייה, נוחה, ומהנה—
            כדי שתתאהבו בשגרה שלכם מחדש.
          </p>
        </div>
      </section>

      {/* ===== Values — Wrapping grid (not full width) ===== */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h3 className="mb-10 text-center text-2xl md:text-3xl font-semibold tracking-tight">
            הערכים שלנו
          </h3>

          {/* Wrap into two columns on sm+; each item has its own max width */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
            {values.map((v) => (
              <li key={v.title} className="w-full max-w-[28rem] text-center">
                <div className="flex items-center justify-center">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm"
                    aria-hidden="true"
                  >
                    {v.icon}
                  </div>
                </div>

                <h4 className="mt-4 text-2xl md:text-3xl font-semibold text-neutral-900">
                  {v.title}
                </h4>
                <p className="mt-2 text-lg md:text-xl leading-9 text-neutral-700">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
