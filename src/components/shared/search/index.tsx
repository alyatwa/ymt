import Image from "next/image";

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <div className="relative w-[60%]">
      <input
        type="text"
        dir="rtl"
        className="w-full h-16 border border-gray-300 focus:outline-none focus:border-gray-300 rounded-lg pr-14 pl-4 text-black"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <Image alt="search" width={32} height={32} src="/Search.png" />
      </div>
    </div>
  );
};
