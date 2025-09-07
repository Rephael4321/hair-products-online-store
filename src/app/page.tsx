import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "דף הבית | מוצרי שיער",
  description:
    "מוצרי שיער מקצועיים עם שירות אישי, איכות ללא פשרות, ושקיפות מלאה.",
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: "קרם לשיער" | "סטייל";
  image: string;
};

// ✅ Products + images (match your /public tree; space in folder is URL-encoded)
const products: Product[] = [
  {
    id: 1,
    name: "מסיכת קולגן לשיער Karseell בנפח 500 מיליליטר/100 מילילילר, אסנס תיקון עמוק לשיער יבש או פגום, לכל",
    price: 67.9,
    category: "קרם לשיער",
    image: "/images/products/lotion%20cream/lotion-cream-1.avif",
  },
  {
    id: 2,
    name: "שמן קיק",
    price: 36.9,
    category: "קרם לשיער",
    image: "/images/products/lotion%20cream/lotion-cream-2.webp",
  },
  {
    id: 3,
    name: "שמן מרולה",
    price: 36.9,
    category: "קרם לשיער",
    image: "/images/products/lotion%20cream/lotion-cream-3.webp",
  },
  {
    id: 4,
    name: "מסכת שיקום שמן מרוקאי MOROCCANOIL",
    price: 89.9,
    category: "סטייל",
    image: "/images/products/style/style-1.png",
  },
  {
    id: 5,
    name: "מסכה לשיער 911 500 מל ביוטופ BIOTOP",
    price: 149,
    category: "סטייל",
    image: "/images/products/style/style-2.webp",
  },
  {
    id: 6,
    name: "קרם לחות ועיצוב לשיער 500 מל שמן מרוקאי MOROCCANOIL",
    price: 88.9,
    category: "סטייל",
    image: "/images/products/style/style-3.webp",
  },
];

export default function HomePage() {
  // Group products by category (renders sections)
  const byCategory = products.reduce<Record<string, Product[]>>((acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  }, {});

  return (
    <main className="bg-white">
      {/* ===== Hero (Home image) ===== */}
      <section className="relative w-full">
        <div className="group relative h-[46vh] min-h-[340px] w-full overflow-hidden md:h-[64vh]">
          <Image
            src="/images/home.jpg"
            alt="מוצרי שיער – איכות, טיפוח, ברק"
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
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/85 px-5 py-2 text-sm text-neutral-800 backdrop-blur-sm">
                <span>איכות • טיפוח • ברק</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Business blurb (new) ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tight">
            מוצרים מקצועיים. ליווי אישי. תוצאות שמרגישים.
          </h2>
          <p className="text-neutral-700 text-base md:text-lg leading-8">
            אנחנו בוחרים עבורכם מוצרי שיער שעובדים באמת—ממותגים מובילים ועד
            פתרונות מדויקים לשגרה יומיומית. אצלנו תקבלו התאמה אישית, הסבר שימוש
            ברור ושירות שאפשר לסמוך עליו, מהרכישה ועד הבית.
          </p>
        </div>
      </section>

      {/* ===== Products ===== */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h3 className="mb-8 text-center text-2xl md:text-3xl font-semibold tracking-tight">
            מוצרים נבחרים
          </h3>

          <div className="space-y-12">
            {Object.entries(byCategory).map(([cat, items]) => (
              <div key={cat}>
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-xl md:text-2xl font-semibold text-neutral-900">
                    {cat}
                  </h4>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {items.map((p) => (
                    <li
                      key={p.id}
                      className="group rounded-2xl border border-neutral-200 bg-white p-3 md:p-4 shadow-sm hover:shadow-md transition"
                    >
                      {/* Uniform image sizing */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width: 768px) 33vw, 100vw"
                          priority={p.id <= 3}
                        />
                      </div>

                      <div className="mt-3 md:mt-4">
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full bg-neutral-900/90 px-2.5 py-0.5 text-[11px] md:text-xs text-white">
                            {p.category}
                          </span>
                          <span className="font-semibold text-neutral-900">
                            ₪{p.price.toFixed(1)}
                          </span>
                        </div>
                        <h5 className="mt-2 text-sm md:text-base font-medium leading-6 text-neutral-900 line-clamp-2">
                          {p.name}
                        </h5>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
