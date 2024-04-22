import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
  onClick: (id: number) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/category/${category.id}`}>
      <div
        className="group flex flex-col justify-center items-center gap-3 min-w-[282px] min-h-[270px] rounded-[18px] shadow-sm bg-white hover:bg-[linear-gradient(136.97deg,_#fff,_#DDB762_3.34%,_#000000_225.23%)] hover:cursor-pointer
    "
      >
        <Image
          src={category.image}
          alt={category.title}
          width={125}
          height={125}
          className="shadow-[41.67px_52.08px_145.83px_0px_rgba(249,218,213,0.8)] group-hover:shadow-[41.67px_52.08px_145.83px_0px_rgba(255,255,255,1)] rounded-full bg-white"
        />

        <h2 className="font-bold text-sm text-[#292019] group-hover:text-white">
          {category.title}
        </h2>
        <p className="text-[#6F6863] text-base group-hover:text-white">
          متوفر عدد {category.lawyers_count}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
