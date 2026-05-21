import thali from "@/assets/dish-thali.jpg";
import samosa from "@/assets/dish-samosa.jpg";
import chole from "@/assets/dish-chole.jpg";
import chowmein from "@/assets/dish-chowmein.jpg";
import maggi from "@/assets/dish-maggi.jpg";
import burger from "@/assets/dish-burger.jpg";
import chai from "@/assets/dish-chai.jpg";
import paneer from "@/assets/dish-paneer.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import hero from "@/assets/hero-food.jpg";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "img"; src: string; alt: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "top-10-cheap-eats-near-lpu-punjab",
    title: "Top 10 Cheap Eats Near Me — LPU Student Guide 2025",
    excerpt: "Searching for cheap food options near me as an LPU student? From ₹20 chai to ₹99 thalis — these are the best affordable restaurants near me right now.",
    date: "2025-02-10",
    readTime: "6 min read",
    body: [
      { type: "p", text: "If you've ever typed “cheap meals near me” into Google while sitting in an LPU hostel, this guide is for you. We've rounded up the top 10 cheap eats near me picks around Lovely Professional University — every plate is hot, fresh, and friendly on a student wallet." },
      { type: "img", src: hero, alt: "Best affordable restaurants near me for LPU students — Student Bites spread" },
      { type: "h2", text: "Why these are the best affordable restaurants near me" },
      { type: "p", text: "Every dish below is priced for students, served within walking distance of LPU, and tested by hundreds of hostelites. If you want cheap food options near me without compromising on hygiene or taste, start here." },
      { type: "h2", text: "1. Student Special Thali (₹99) — best student meal near me" },
      { type: "img", src: thali, alt: "Cheap student meals near me — ₹99 thali at Student Bites near LPU" },
      { type: "p", text: "A complete plate with dal, sabzi, two rotis, rice and raita — the most filling cheap meal near me you'll find around LPU." },
      { type: "h2", text: "2. Punjabi Samosa (₹25) — cheapest snack near me" },
      { type: "img", src: samosa, alt: "Cheap food options near me — crispy ₹25 Punjabi samosa near LPU" },
      { type: "p", text: "Crisp, masala-loaded and the lowest-priced snack on any cheap eats near me list around campus." },
      { type: "h2", text: "3. Tandoori Masala Chai (₹20)" },
      { type: "img", src: chai, alt: "Cheap masala chai near me at affordable restaurant near LPU" },
      { type: "p", text: "Smoky, strong, ₹20 — the most-ordered drink at the best affordable restaurants near me." },
      { type: "h2", text: "4. Aloo Tikki Burger (₹60)" },
      { type: "p", text: "Soft buns, spicy tikki, mint chutney — affordable comfort food between classes." },
      { type: "h2", text: "5. Masala Cheese Maggi (₹70)" },
      { type: "img", src: maggi, alt: "Late-night cheap meals near me — masala cheese maggi near LPU" },
      { type: "p", text: "A late-night hostel staple, served piping hot till 1 AM." },
      { type: "h2", text: "6. Veg Hakka Chowmein (₹80)" },
      { type: "img", src: chowmein, alt: "Cheap food options near me — veg hakka chowmein near LPU" },
      { type: "p", text: "Budget Indo-Chinese done right — one of the best cheap meals near me under ₹100." },
      { type: "h2", text: "7. Chole Bhature (₹90)" },
      { type: "img", src: chole, alt: "Affordable restaurants near me — Punjabi chole bhature near LPU" },
      { type: "p", text: "A heavy Punjabi classic that keeps you full till dinner." },
      { type: "h2", text: "8–10. Lassi, Cold Coffee & Paneer + Naan" },
      { type: "img", src: paneer, alt: "Best affordable restaurants near me — paneer butter masala and naan near LPU" },
      { type: "p", text: "Round it off with mango lassi (₹50), cold coffee with ice-cream (₹80), or treat yourself to paneer butter masala + naan (₹149). All of them earn their spot on this cheap eats near me list." },
      { type: "p", text: "Whether you're new to LPU or a final-year veteran, Student Bites is consistently rated among the best affordable restaurants near me by LPU students." },
    ],
  },
  {
    slug: "best-student-meals-under-100-near-lpu",
    title: "Best Student Meals Near Me Under ₹100 (LPU Edition)",
    excerpt: "Looking for cheap meals near me that actually keep you full? These are the best student meals under ₹100 at affordable restaurants near LPU.",
    date: "2025-02-18",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Every LPU student eventually searches “cheap meals near me” at 9 PM with ₹100 in UPI balance. This list is the answer — the best student meals near me, all served fresh at Student Bites, one of the most affordable restaurants near me on Law Gate." },
      { type: "img", src: thali, alt: "Cheap meals near me under ₹100 — student thali at affordable restaurant near LPU" },
      { type: "h2", text: "Student Special Thali (₹99) — the king of cheap meals near me" },
      { type: "p", text: "Dal, fresh rotis, sabzi, rice, raita and a sweet bite. Value that beats every other affordable restaurant near me around LPU." },
      { type: "h2", text: "Chole Bhature (₹90) — heaviest cheap meal near me" },
      { type: "img", src: chole, alt: "Affordable restaurants near me — ₹90 chole bhature near LPU campus" },
      { type: "p", text: "Two big bhature, spicy chole, sliced onions and lemon. A full Punjabi lunch under ₹100." },
      { type: "h2", text: "Veg Hakka Chowmein (₹80)" },
      { type: "img", src: chowmein, alt: "Cheap food options near me — Schezwan veg chowmein near LPU" },
      { type: "p", text: "A Schezwan-spiced bowl of noodles tossed with crunchy veg." },
      { type: "h2", text: "Masala Cheese Maggi (₹70)" },
      { type: "img", src: maggi, alt: "Late-night cheap meals near me — cheese maggi near LPU hostel" },
      { type: "p", text: "Comfort food perfected; loaded with cheese and homemade masala." },
      { type: "h2", text: "Aloo Tikki Burger (₹60)" },
      { type: "img", src: burger, alt: "Cheap food options near me — ₹60 aloo tikki burger near LPU" },
      { type: "p", text: "Soft buns, spicy tikki and chutney. Snacks under ₹100 don't get better than this." },
      { type: "p", text: "Pro tip: pair any of these cheap meals near me with a ₹20 tandoori chai for the ultimate combo at the best affordable restaurants near me." },
    ],
  },
  {
    slug: "affordable-food-places-near-lpu-campus",
    title: "Best Affordable Restaurants Near Me — LPU Campus Guide",
    excerpt: "A walking guide to the best affordable restaurants near me around LPU — where to find cheap food options near me without sacrificing taste or hygiene.",
    date: "2025-03-02",
    readTime: "7 min read",
    body: [
      { type: "p", text: "Search “best affordable restaurants near me” around Phagwara and you'll get fifty results. Only a handful actually deliver on price and taste. Here's an honest walking guide to cheap food options near me around the LPU campus." },
      { type: "img", src: interior, alt: "Best affordable restaurants near me — Student Bites interior near LPU Law Gate" },
      { type: "h2", text: "Law Gate Strip — most cheap meals near me, mixed quality" },
      { type: "p", text: "Packed with budget options, but quality varies. Stick to places with high student footfall if you want safe, cheap meals near me." },
      { type: "h2", text: "Deep Nagar — quieter cheap food options near me" },
      { type: "p", text: "Slightly cheaper than Law Gate but limited variety after 10 PM. Good for early dinners, not late-night cravings." },
      { type: "h2", text: "Student Bites (Law Gate) — our pick for best affordable restaurants near me" },
      { type: "img", src: thali, alt: "Best affordable restaurants near me — ₹99 student thali at Student Bites near LPU" },
      { type: "p", text: "₹99 thali, ₹20 chai, hygienic kitchen, open till 1 AM. The most reliable cheap food options near me on the entire Law Gate strip." },
      { type: "h2", text: "What to look for in affordable restaurants near me" },
      { type: "p", text: "Clear pricing, hygienic prep area, student combos, fast service between class breaks, and late-night hours. Tick all five and you've found genuinely cheap meals near me — not just cheap-looking ones." },
      { type: "h2", text: "Why students rank Student Bites as the best affordable restaurant near me" },
      { type: "p", text: "Every dish is priced for students, the menu rotates weekly, and there are always snacks under ₹100. That's why LPU students keep rating us the best affordable restaurant near me in Phagwara Punjab." },
    ],
  },
];
