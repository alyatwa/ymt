import { api } from "@/utils/api";

export const useCategories = async () => {
  const response = await api.get(`digital-guide/categories`);
  return { categories: response.data.data.categories as Category[] };
};
