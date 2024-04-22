import { api } from "@/utils/api";

export const useProfile = async (id: string) => {
  const response = await api.get(`lawyer/${id}`);
  return {
    profile: response.data.data.lawyer as Profile,
  };
};
