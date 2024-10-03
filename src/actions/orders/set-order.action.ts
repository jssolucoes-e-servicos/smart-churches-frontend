"use server";
import api from "@/services/api";

export const getCellsAction = async (formData: FormData) => {
  try {
    const { data } = await api.post("orders", formData);

    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu login",
    };
  }
};
