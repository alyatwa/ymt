import { API } from "@/const";
import axios from "axios";

export const useCategories = async () => {
  const response = await axios.get(`${API.base}digital-guide/categories`);
  return { categories: response.data.data.categories as Category[] };
};
