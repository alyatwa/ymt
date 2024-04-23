import { Title } from "@/components/shared/title";

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <div className="rounded-lg bg-white p-8 min-h-[190px]" dir="rtl">
      <Title text="النبذة التعريفية" />

      <p className="text-[#A3A4A5] text-base font-normal mt-4">
        {summary || "لا يوجد نبذة تعريفية"}
      </p>
    </div>
  );
};
