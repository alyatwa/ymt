import { api } from "@/utils/api";

export const useProfiles = async () => {
  const response = await api.post(`digital-guide/search`);
  return {
    profiles: response.data.data.lawyers as Profile[],
  };
};
