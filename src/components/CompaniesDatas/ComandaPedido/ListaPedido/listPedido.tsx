"use client";

import { ICell } from "@/interfaces";



export default function ListaDePedido({
  cells,
}: {
  cells: ICell[] | null;
}) {

  const HandleTable = () => {
    return (
      <table className="min-w-full table-auto mt-0">
        <thead>
          <tr className="">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Rede</th>
            <th className="px-4 py-2">Líder</th>
            <th className="px-4 py-2">Endereço</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {cells !== null && cells.map((cell) => (
            <tr key={cell.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{cell.name}</td>
              <td className="border px-4 py-2">{cell.name}</td>
              <td className="border px-4 py-2">{cell.name}</td>
              <td className="border px-4 py-2">
                {cell.address?.street}, {cell.address?.number} -{' '}
                {cell.address?.city}, {cell.address?.state}
              </td>
              <td className="border px-4 py-2">
                <button className="text-blue-600 hover:underline">Editar</button>
                <button className="ml-4 text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className="col-span-12 h-auto  shadow-default   dark:bg-transparent xl:col-span-12">
      <div
        className="flex flex-col items-start justify-between relative  w-full  p-4"
        style={{ zIndex: "99999!important" }}
      >
        <div className=" py-2  border-b border-neutral-300 w-full">
          <h2 className="text-2xl font-bold mb-4 text-neutral-500 dark:text-neutral-300">
            Células
          </h2>
          {cells === null ? <p>Não foi encontrada célula</p> : <HandleTable />}
        </div>
      </div>
      <div className="overflow-y-auto mt-1 grid grid-cols-12 gap-4 md:mt-2 md:gap-6  2xl:gap-7 pl-4 pr-4 ">


      </div>
    </div >
  );
}