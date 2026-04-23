import samosa from "@/assets/dish-samosa.jpg";
import chole from "@/assets/dish-chole.jpg";
import thali from "@/assets/dish-thali.jpg";
import chowmein from "@/assets/dish-chowmein.jpg";
import paneer from "@/assets/dish-paneer.jpg";
import lassi from "@/assets/dish-lassi.jpg";
import chai from "@/assets/dish-chai.jpg";
import burger from "@/assets/dish-burger.jpg";
import maggi from "@/assets/dish-maggi.jpg";
import coldcoffee from "@/assets/dish-coldcoffee.jpg";

export type Category = "Snacks" | "Meals" | "Beverages";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  alt: string;
  tag?: string;
}

export const menu: MenuItem[] = [
  { id: "samosa", name: "Crispy Punjabi Samosa", category: "Snacks", price: 25, image: samosa,
    alt: "Cheap crispy samosa snack near LPU Punjab",
    description: "Golden, flaky and stuffed with masala aloo — the cheapest tea-time snack near LPU campus.", tag: "Under ₹50" },
  { id: "burger", name: "Aloo Tikki Burger", category: "Snacks", price: 60, image: burger,
    alt: "Affordable aloo tikki burger near LPU Phagwara",
    description: "Soft sesame bun, spicy aloo tikki and mint chutney — affordable comfort food for students.", tag: "Under ₹100" },
  { id: "maggi", name: "Masala Cheese Maggi", category: "Snacks", price: 70, image: maggi,
    alt: "Hostel-style cheap masala maggi near LPU campus",
    description: "Hostel-style maggi loaded with cheese, veggies and homemade masala. Cheap eats for late-night cravings.", tag: "Student Fav" },
  { id: "chowmein", name: "Veg Hakka Chowmein", category: "Snacks", price: 80, image: chowmein,
    alt: "Cheap veg chowmein noodles near LPU Punjab",
    description: "Wok-tossed noodles with crunchy veggies — a budget Indo-Chinese pick under ₹100.", tag: "Under ₹100" },

  { id: "thali", name: "Student Special Thali", category: "Meals", price: 99, image: thali,
    alt: "Best budget student meal thali near LPU under 100",
    description: "Dal, sabzi, 2 rotis, rice, raita and salad — the best student meal under ₹100 near LPU.", tag: "Bestseller" },
  { id: "chole", name: "Chole Bhature", category: "Meals", price: 90, image: chole,
    alt: "Affordable chole bhature near LPU Phagwara",
    description: "Two fluffy bhature with spicy Punjabi chole — a filling, affordable Punjabi meal.", tag: "Punjabi Classic" },
  { id: "paneer", name: "Paneer Butter Masala + Naan", category: "Meals", price: 149, image: paneer,
    alt: "Student-friendly paneer butter masala with naan near LPU",
    description: "Creamy paneer butter masala served with butter naan — restaurant taste at student price.", tag: "Chef's Pick" },

  { id: "chai", name: "Tandoori Masala Chai", category: "Beverages", price: 20, image: chai,
    alt: "Cheap masala chai near LPU campus",
    description: "Smoky tandoori-brewed masala chai — the cheapest pick-me-up between LPU lectures.", tag: "Under ₹50" },
  { id: "lassi", name: "Sweet Mango Lassi", category: "Beverages", price: 50, image: lassi,
    alt: "Affordable mango lassi near LPU Punjab",
    description: "Thick, chilled mango lassi blended fresh — perfect for Punjab summers.", tag: "Refreshing" },
  { id: "coldcoffee", name: "Cold Coffee with Ice Cream", category: "Beverages", price: 80, image: coldcoffee,
    alt: "Affordable cold coffee with ice cream near LPU",
    description: "Frothy cold coffee topped with vanilla ice cream and chocolate drizzle.", tag: "Cafe Style" },
];
