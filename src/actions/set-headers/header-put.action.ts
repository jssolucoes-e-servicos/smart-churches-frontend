"use server"
import { cookies } from "next/headers";
import api from "@/services/api";
export async function setHeadersPut() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("smartChurches.token")?.value;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        //api.defaults.headers.ApplicationName = 'web';
        return token;
    }
    return null;
  } catch (error) {
    return null;
  }
}