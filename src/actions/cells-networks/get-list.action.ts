"use server";
import { setHeaders } from "@/actions/set-headers/set-headers.action";
import api from "@/services/api";

export const getCellsNetworksAction = async () => {
  try {
    await setHeaders();
    const { data } = await api.get("cells-networks");

    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar sua requisição",
    };
  }
};
