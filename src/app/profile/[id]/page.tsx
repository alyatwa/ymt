import { useProfile } from "@/hooks/useProfile";
import { useProfiles } from "@/hooks/useProfiles";

export async function generateStaticParams() {
  const { profiles } = await useProfiles();

  let allProfiles: { id: string }[] = [];

  profiles.map((item) => {
    allProfiles.push({
      id: item.id.toString(),
    });
  });

  return allProfiles;
}

export default async function Profile({
  params: { id },
}: {
  params: { id: string };
}) {
  const { profile } = await useProfile(id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 py-24 bg-[#f9f9f9]">
      <h1 className="text-[#252525] font-bold text-3xl">
        *****{profile.first_name}
      </h1>
    </main>
  );
}
