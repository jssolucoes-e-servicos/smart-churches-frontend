"use client";

import { Fragment } from "react";
//import { useFormStatus } from "react-dom";
import CardViewDetails from "../dashboardView/cardView";
import ChartThree from "../dashboardView/ChartThree";

type InputFormType = {
  type: string;
  name: string;
  placeholder: string;
  classname: string;
  defaultValue?: string;
  globalMessageCounts:any;
  statusCountsCompanyData: any;
};

export function CardHome({
  type,
  name,
  placeholder,
  classname,
  globalMessageCounts,
  statusCountsCompanyData
}: InputFormType) {
  //const { pending } = useFormStatus();

  return (
    <Fragment>
      <div className="flex items-center p-4 m-4 ">
        <div className="flex flex-col">
          <div className="font-medium leading-none  dark:text-rose-700 text-black ">
            Dashboard
          </div>
          <p className="text-sm dark:text-white text-gray-500  leading-none mt-1 ">
            visualização andamentos de leads.
          </p>
        </div>
      </div>

      <CardViewDetails globalMessageCounts={globalMessageCounts} />
      {/* <CardViewDetails />  */}
      <ChartThree
        total={statusCountsCompanyData.total}
        NOVO={statusCountsCompanyData.NOVO}
        STARTED={statusCountsCompanyData.STARTED}
        STOPPED={statusCountsCompanyData.STOPPED}
        REPLIED={statusCountsCompanyData.REPLIED}
        NOTREPLIED={statusCountsCompanyData.NOTREPLIED}
        NOTSCHEDULED={statusCountsCompanyData.NOTSCHEDULED}
        SCHEDULED={statusCountsCompanyData.SCHEDULED}
        ERROR={statusCountsCompanyData.ERROR}
        INVALIDNUMBER={statusCountsCompanyData.INVALIDNUMBER}
        IMPACTED={statusCountsCompanyData.IMPACTED}
        TOTALSCHEDULED={statusCountsCompanyData.TOTALSCHEDULED}
        PERCENTENTAGESCHEDULED={statusCountsCompanyData.PERCENTENTAGESCHEDULED}
        JULI={statusCountsCompanyData.JULI}
        BLOCKED={statusCountsCompanyData.BLOCKED}
      />

      {/* <input
        aria-disabled={pending}
        type={type}
        name={name}
        placeholder={placeholder}
        className={classname}
      /> */}
    </Fragment>
  );
}

// "use client";

// import { Fragment } from "react";
// //import { useFormStatus } from "react-dom";
// import CardViewDetails from "../dashboardView/cardView";
// import ChartThree from "../dashboardView/ChartThree";

// type InputFormType = {
//   type: string;
//   name: string;
//   placeholder: string;
//   classname: string;
//   defaultValue?: string;
//   globalMessageCounts:any
// };

// export function CardHome({
//   type,
//   name,
//   placeholder,
//   classname,
//   globalMessageCounts,
// }: InputFormType) {
//   //const { pending } = useFormStatus();

//   return (
//     <Fragment>
//       <div className="flex items-center p-4 m-4 ">
//         <div className="flex flex-col">
//           <div className="font-medium leading-none  dark:text-rose-700 text-black ">
//           Dashboard
//           </div>
//           <p className="text-sm dark:text-white text-gray-500  leading-none mt-1 ">
//             visualização andamentos de leads.
//           </p>
//         </div>
//       </div>
      
//       <CardViewDetails globalMessageCounts={globalMessageCounts}/>
//         {/* <CardViewDetails />  */}
//       <ChartThree/>
    
//       {/* <input
//         aria-disabled={pending}
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         className={classname}
//       /> */}
//     </Fragment>
//   );
// }
