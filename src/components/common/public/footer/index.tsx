
import { Separator } from "@/components/common/public/separator";

export async function PublicFooter() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[2.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-center">
          <img src="/assets/logos/smartchurches_inline.png" alt="footer logo" />
          <div className="text-neutral-800 text-[1rem] ">
            © {currentYear} smartChurches. Todos os direitos reservados.
          </div>
        </div>

        <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem]">Home</p>
          <p className="text-lightBlue text-[1rem]">Como funciona</p>
          <p className="text-lightBlue text-[1rem]">CRM</p>
          <p className="text-lightBlue text-[1rem]">Sobre</p>
          <p className="text-lightBlue text-[1rem]">Conecte-se</p>
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray">
          Desenvolvido por{" "}
          <a href="https://jssolucoeseservicos.com.br" target="_blank">
            JS Soluções e Serviços
          </a>
        </p>
      </div>
    </section>
  );
}
