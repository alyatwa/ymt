import { About } from "@/components/profile/about";
import { Booking } from "@/components/profile/booking";
import { Summary } from "@/components/profile/summary";
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
    <main className="flex min-h-screen flex-col md:flex-row items-center md:items-start justify-center gap-6 py-24 bg-[#f9f9f9]">
      <div className="flex flex-col gap-6 justify-start">
        <About profile={profile} />
        <Summary summary={profile.about} />
      </div>

      <Booking />
    </main>
  );
}
