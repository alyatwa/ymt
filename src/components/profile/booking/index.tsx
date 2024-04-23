import { Title } from "@/components/shared/title";

interface BookingProps {}

export const Booking: React.FC<BookingProps> = ({}) => {
  return (
    <div className="rounded-lg p-8 bg-white min-h-[631px] w-full sm:w-auto">
      <Title text="معلومات الحجز" />
    </div>
  );
};
