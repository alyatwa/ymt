import CategoryCard from "@/components/digital-guide/category-card";
import { Search } from "@/components/shared/search";
import { API } from "@/const";
import { useCategories } from "@/hooks/useCategories";
import axios from "axios";

export default async function Home() {
  const { categories } = await useCategories();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 py-24 bg-[#f9f9f9]">
      <h1 className="text-[#252525] font-bold text-3xl">الدليل الرقمي</h1>
      <Search />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {categories.map((category) => (
          <CategoryCard
            category={category}
            onClick={() => {}}
            key={category.id}
          />
        ))}
      </div>
    </main>
  );
}
