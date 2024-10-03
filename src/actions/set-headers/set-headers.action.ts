"use server"
import api from "@/services/api";
import { cookies } from "next/headers";
export async function setHeaders() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("smartChurches.token")?.value;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        api.defaults.headers.ApplicationName = 'web';
        return token;
    }
    return null;
  } catch (error) {
    return null;
  }
}