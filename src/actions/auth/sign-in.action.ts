"use server";
import api from "@/services/api";
import { cookies } from "next/headers";

export const signInAction = async (formData: FormData) => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const {
      data: { user, access_token },
    } = await api.post("auth/login", {
      username,
      password,
      app: "smart-churches-web",
    });
    if (access_token) {
      cookies().set("smartChurches.token", access_token, { secure: true });
      cookies().set("smartChurches.member", JSON.stringify(user), { secure: true });
      api.defaults.headers.Authorization = `Bearer ${access_token}`;
      return user;
    } else {
      return {
        error: "Usuário inválido",
      };
    }
  } catch (error: any) {
    console.error(error);
    return {
      error: "Falha ao processar seu login",
    };
  }
};
