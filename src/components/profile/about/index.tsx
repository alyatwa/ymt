import { Title } from "@/components/shared/title";
import Image from "next/image";

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <div className="rounded-lg bg-white p-12" dir="rtl">
      <Title text="المعلومات الشخصية" />

      <div className="flex flex-row gap-4 mt-8">
        <Image
          src={profile.logo}
          className="rounded-full w-[120px] h-[120px]"
          width={120}
          height={120}
          alt={profile.first_name}
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-[#2C4768] font-bold text-xl">
            {profile.first_name} {profile.second_name} {profile.third_name}
          </h2>
          <p className="text-[#A3A4A5] font-normal text-base">
            {profile.about}
          </p>
          <p className="text-[#A3A4A5] font-normal text-base">
            5.00 التقييم العام من 154 من العملاء
          </p>
          <Review />
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="min-h-[100px] bg-[#F9F9F9] rounded-tl-3xl rounded-br-3xl p-10">
      <p className="text-[#A3A4A5] font-normal text-sm">
        تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية
      </p>
    </div>
  );
};
