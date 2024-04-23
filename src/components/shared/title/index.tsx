interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-[#2C4768] font-bold text-3xl">{text}</h1>;
};
