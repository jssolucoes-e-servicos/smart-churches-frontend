'use server';
import { CellsNetworksListTable } from "@/components/Tables/CellsNetworksListTable";

import { getCellsNetworksAction } from "@/actions/cells-networks/get-list.action";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Fragment } from "react";

export default async function CellsPage() {

  const networks = await getCellsNetworksAction();
  console.log(networks);

  return (
    <Fragment>
      <Breadcrumb pageName="layout" />
      <div className=" text-black dark:text-white p-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 m-1">
          <div className="col-span-12 h-auto  shadow-default   dark:bg-transparent xl:col-span-12">
            <div
              className="flex flex-col items-start justify-between relative  w-full  p-4"
              style={{ zIndex: "99999!important" }}
            >
              <div className=" py-2  border-b border-neutral-300 w-full">
                <h2 className="text-2xl font-bold mb-4 text-neutral-500 dark:text-neutral-300">
                  Células
                </h2>
                {networks === null ? <p>Ocorreu um erro ao listar as células</p> : <CellsNetworksListTable data={networks} />}
              </div>
            </div>
            <div className="overflow-y-auto mt-1 grid grid-cols-12 gap-4 md:mt-2 md:gap-6  2xl:gap-7 pl-4 pr-4 ">
            </div>
          </div >
        </div>
      </div>
    </Fragment>
  );
}

