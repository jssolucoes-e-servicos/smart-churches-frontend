import { ThemeProvider } from "@/hooks/ThemeProvider";
import "@/styles/globals.css";
import Image from "next/image";
import { Toaster } from 'react-hot-toast';

const description = "SISTEMA ADMINISTRATIVO";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <ThemeProvider>
          <div className="flex justify-center items-center h-[100vh] dark:bg-zinc-800 bg-zinc-800">
            <div className=" w-full justify-center items-start h-screnn flex ">
              <div className=" w-full relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
                  <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative bg-[url('https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80')]">
                    <div className="absolute bg-gradient-to-b from-sky-500 to-blue-900 opacity-75 inset-0 z-0"></div>
                    <div
                      style={{
                        borderTopWidth: "70rem",
                        borderLeftWidth: "26rem",
                        borderStyle: "solid",
                        borderColor: "#262626 transparent  #262626",
                      }}
                      className="absolute  min-h-screen right-0 w-16"
                    ></div>
                    <div className="w-full  max-w-md z-10">
                      <Image
                        src="/storage/assets/images/logo-inline.png"
                        width={100}
                        height={250}
                        alt="aji"
                        className="object-cover mx-auto w-80"
                      />
                      <div className="mt-8 sm:text-sm xl:text-md text-gray-200 font-normal">{description}</div>
                    </div>
                  </div>
                  <div className="max-w-md w-full space-y-8 mt-5 mr-5">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


