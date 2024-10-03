 "use server"
import { IUser } from "@/interfaces";
import { cookies } from "next/headers";

export async function getAuthenticatedAction(): Promise<IUser | null> {
  try {
    const cookieStore = cookies();
    const userCookie = cookieStore.get("smartChurches.member")?.value;
    if (userCookie) {
      const user: IUser = JSON.parse(userCookie);
      return user;
    }
    return null;
  } catch (error) {
    // Handle errors, log them, or return null
    console.error("Error fetching user cookie:", error);
    return null;
  }
}


// "use server"
// import { cookies } from 'next/headers'
// import { IUser } from '@/interfaces'

// export async function getAuthenticatedAction(): Promise<IUser|null> {
//   const cookieStore = cookies()
//   const userCookie = cookieStore.get('acl1')?.value;
//   if (userCookie){
//     const user: IUser = JSON.parse(userCookie);
//     return user;
//   }
//   return null;
// }