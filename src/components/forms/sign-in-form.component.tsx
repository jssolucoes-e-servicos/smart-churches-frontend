"use client";
import { signInAction } from "@/actions/auth/sign-in.action";
import { SignInButton } from "@/components/buttons/sign-in-button.component";
import { InputForm } from "@/components/elements/input-form.component";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  async function handleSignIn(formData: FormData) {
    const toastId = toast.loading("Processando");
    const result = await signInAction(formData);
    if (result?.error) {
      toast.dismiss(toastId);
      toast.error(result?.error);
    } else {
      toast.dismiss(toastId);
      toast.success("Login efetuado, abrindo sistema");
      redirect("/app");
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Fragment>
      <form className="mt-8 space-y-6" action={handleSignIn}>
        <input type="hidden" name="remember" value="true" />
        <div className="relative">
          <label className="ml-3 text-sm font-bold text-gray-100 tracking-wide">
            Usuário
          </label>
          <InputForm
            type="text"
            placeholder="exemplo@gmail.com"
            name="username"
            classname=" w-full text-base px-4 py-2 border dark:gray-800 bg-neutral-800/30 text-gray-300 border-gray-500 focus:outline-none rounded-2xl focus:border-sky-700"
          />
        </div>
        <div className="mt-8 relative content-center">
          <label className=" text-sm font-bold text-gray-100 tracking-wide">
            Senha
          </label>
          <div className="flex flex-row ">
            <div className="absolute flex justify-center items-center right-4  h-[40px]">
              <span
                className=" mr-1 "
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash size={22} />
                ) : (
                  <FaEye size={22} />
                )}
              </span>
            </div>
            <InputForm
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              name="password"
              classname="w-full content-center text-base px-4 py-2 border bg-neutral-800/30 rounded-2xl dark:gray-800 text-gray-300 border-gray-500 focus:outline-none focus:border-sky-700"
            />
          </div>

        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 bg-rose-500 focus:ring-rose-400 border-gray-800 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-100"
            >
              Lembre de mim
            </label>
          </div>
          <div className="text-sm">
            <Link href="#" >
              <span className="text-blue-400 hover:text-blue-500">
                Esqueceu a senha?
              </span>
            </Link>
          </div>
        </div>
        <div>
          <SignInButton />
        </div>
        {/* <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
        <span>Não tem uma conta?</span>
        <Link href="#">
          <span className="text-white hover:text-rose-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
            Criar conta
          </span>
        </Link>
      </p> */}
      </form>
    </Fragment>
  );
}
