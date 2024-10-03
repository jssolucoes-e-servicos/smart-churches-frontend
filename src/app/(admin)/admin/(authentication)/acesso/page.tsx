import { SignInForm } from "@/components/forms/sign-in-form.component";
import { Metadata } from "next";
import { Fragment } from "react";


export const metadata: Metadata = {
  title: "Acesso | smartChurches ADMIN",
  description: "",
};

export default function SignInPage() {
  return (
    <Fragment>
      <div className="flex flex-col text-center justify-center items-center">
        <p className="mt-2 text-lg text-gray-200">
          Por favor entre em sua conta
        </p>
      </div>
      <SignInForm />
    </Fragment>
  )
};