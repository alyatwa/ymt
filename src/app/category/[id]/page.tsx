import ProfileCard from "@/components/category/profile-card";
import { Search } from "@/components/shared/search";
import { useCategories } from "@/hooks/useCategories";
import { useCategory } from "@/hooks/useCategory";

export async function generateStaticParams() {
  const { categories } = await useCategories();

  let allCategories: { id: string }[] = [];

  categories.map((item) => {
    allCategories.push({
      id: item.id.toString(),
    });
  });

  return allCategories;
}

export default async function Category({
  params: { id },
}: {
  params: { id: string };
}) {
  const { profiles, header } = await useCategory(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 py-24 bg-[#f9f9f9]">
      <h1 className="text-[#252525] font-bold text-3xl">{header}</h1>
      <Search />

      {profiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {profiles.map((profile) => (
            <ProfileCard
              profile={profile}
              onClick={() => {}}
              key={profile.id}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-black">لا يوجد محامين</h1>
        </div>
      )}
    </main>
  );
}
