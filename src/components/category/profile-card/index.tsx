import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  profile: Profile;
  onClick: (id: number) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <Link
      href={`/profile/${profile.id}`}
      passHref
      className="group flex flex-col justify-center items-center text-center gap-3 w-[280px] min-h-[270px] rounded-[18px] bg-white hover:bg-[linear-gradient(136.97deg,_#fff,_#DDB762_3.34%,_#000000_225.23%)] hover:cursor-pointer border border-[#e0e6ed] shadow-[0_4.26px_8.51px_0px_rgba(211,215,226,1)]
    "
    >
      <Image
        src={profile.logo}
        alt={profile.first_name}
        width={121}
        height={121}
        className="rounded-full bg-white"
      />

      <h2 className="font-bold text-sm text-[#2C4768] group-hover:text-white">
        {profile.first_name + " " + profile.second_name}
      </h2>
      <p className="text-[#2C4768] text-sm font-normal group-hover:text-white">
        {profile.about}
      </p>

      <p className="text-[#2C4768] text-xs font-medium group-hover:text-white">
        4.56 (35 مراجعة)
      </p>
    </Link>
  );
};

export default ProfileCard;
