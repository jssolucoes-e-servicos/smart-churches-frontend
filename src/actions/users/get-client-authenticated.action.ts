 "use client"
 import { IUser } from "@/interfaces";
import { parseCookies } from "nookies";
 
 export function getClientAuthenticatedAction() {
   try {
     const cookies = parseCookies();
     const userCookie =  cookies["smartChurches.member"];
     if (userCookie) {
       const user: IUser = JSON.parse(userCookie);
       return user;
     }
     return null;
   } catch (error) {
     console.error("Error fetching user cookie:", error);
     return null;
   }
 }