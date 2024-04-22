import { api } from "@/utils/api";

export const useCategory = async (id: string) => {
  const formData = new FormData();
  formData.append("category_id", id);

  const response = await api.post(`digital-guide/search`, formData);
  return {
    profiles: response.data.data.lawyers as Profile[],
    header: response.data.data.lawyers[0]?.sections[0]?.section?.title ?? "",
  };
};
