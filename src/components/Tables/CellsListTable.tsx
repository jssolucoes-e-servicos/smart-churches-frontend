"use client";

import { ICell } from "@/interfaces";



export function CellsListTable({
  data,
}: {
  data: ICell[];
}) {

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
        {data.length > 0 ? data.map((cell) => (
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
        )) : (<p>Não foi encontrada Célula ativa</p>)}
      </tbody>
    </table>
  );
}