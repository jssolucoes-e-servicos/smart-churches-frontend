
import {
  FaWhatsapp,
  FaTimes,
  FaChartBar,

} from "react-icons/fa";
export default function MessageWhCompanie() {
  return (
    <div className="col-span-12 xl:col-span-4">
      <div className="flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5">
        <div className="relative rounded-sm border border-stroke bg-white py-8 pl-7.5 pr-12 shadow-default dark:border-strokedark dark:bg-aibitMenu xl:py-11 2xl:pl-12 2xl:pr-16">
          <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-9 items-center justify-center">
            <div
              className="relative flex items-center justify-center"
              x-data="{ percent: 30 }"
            >
              <div
                className="flex flex-col items-center justify-center"
                style={{ width: "150px", height: "150px" }}
              >
                <svg
                  className=" -rotate-90 transform"
                  style={{ width: "150px", height: "150px" }}
                >
                  <circle
                    className="text-stroke dark:text-strokedark"
                    strokeWidth="16"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="66"
                    cy="66"
                  ></circle>
                  <circle
                    className="text-meta-6"
                    strokeWidth="16"
                    strokeDasharray="364.42"
                    strokeDashoffset={364.42 - (30 / 100) * 364.42}
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="66"
                    cy="66"
                  ></circle>
                </svg>
                <span
                  className="absolute text-xl font-bold text-black dark:text-white"
                  x-text="`${percent}%`"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  30%
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-1xl font-bold text-black dark:text-white">
                Mensagem disponivel
              </h3>
              <p className="mt-3.5 font-medium">
                <span className="text-black dark:text-white">250</span>
                <span className="text-sm"> MSG</span> /
                <span className="text-black dark:text-white">500</span>
                <span className="text-sm"> MSG</span>
              </p>
            </div>

            <button className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-[270deg] rounded-t-lg bg-[#f3ce3d] py-1 px-4 font-medium text-white">
              Ativo
            </button>
          </div>
        </div>

        <div className="flex-grow rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-aibitMenu md:p-6 xl:p-7.5">
          <div className="flex gap-4">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-[#F6F6F8] dark:bg-graydark">
              {/* <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_608_17998)">
                  <path
                    d="M23.1754 8.11967C22.8861 7.83042 22.4884 7.64963 22.0184 7.64963H17.6795V6.20336C17.6795 5.9141 17.5711 4.75708 16.0525 4.75708H7.66407C6.21779 4.75708 6.10932 5.9141 6.10932 6.20336V7.64963H1.77049C1.0112 7.64963 0.324219 8.33661 0.324219 9.09591V18.7498C0.324219 19.5091 1.0112 20.1961 1.77049 20.1961H22.0184C22.7777 20.1961 23.4646 19.5091 23.4646 18.7498V9.16822C23.4646 8.80665 23.3562 8.40893 23.1754 8.11967ZM21.5483 18.2436H2.24053V9.56595H6.10932C7.15787 9.56595 8.02564 8.69818 8.02564 7.64963V6.6734H15.7271V7.64963C15.7271 8.69818 16.5948 9.56595 17.6434 9.56595H21.5122V18.2436H21.5483Z"
                    fill="#3056D3"
                  ></path>
                  <path
                    d="M11.4251 9.56592C9.58109 9.56592 8.0625 11.1207 8.0625 12.9285C8.0625 14.8448 9.50878 16.2911 11.4251 16.2911C13.2691 16.2911 14.7877 14.7364 14.7877 12.9285C14.7877 11.1207 13.2329 9.56592 11.4251 9.56592ZM11.4251 14.4109C10.5573 14.4109 9.97882 13.8324 9.97882 12.9647C9.97882 12.2054 10.6658 11.5184 11.4251 11.5184C12.1844 11.5184 12.8714 12.2054 12.8714 12.9647C12.8714 13.6878 12.1844 14.4109 11.4251 14.4109Z"
                    fill="#3056D3"
                  ></path>
                  <path
                    d="M4.19303 12.4585C4.73219 12.4585 5.16927 12.0214 5.16927 11.4822C5.16927 10.9431 4.73219 10.506 4.19303 10.506C3.65387 10.506 3.2168 10.9431 3.2168 11.4822C3.2168 12.0214 3.65387 12.4585 4.19303 12.4585Z"
                    fill="#3056D3"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_608_17998">
                    <rect
                      width="23.1404"
                      height="23.1404"
                      fill="white"
                      transform="translate(0.324219 0.924438)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg> */}
              <FaWhatsapp className="text-success"/>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Media por diaparos
                </span>
                <span className="text-sm font-medium">20 MSG</span>
              </div>

              <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-5/6 rounded-full bg-primary"></span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-4">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-[#F6F6F8] dark:bg-graydark">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <g clip-path="url(#clip0_608_18010)">
                  <path
                    d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                    fill="#F2994A"
                  ></path>
                </g> */}
                <defs>
                  <clipPath id="myClip">
                    <rect
                    width="100" height="100"
                      // width="23.1404"
                      // height="23.1404"
                      fill="white"
                      transform="translate(0.324219 0.0314941)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Mensagens WhatsApp
                </span>
                <span className="text-sm font-medium">250</span>
              </div>

              <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#F2994A]"></span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-4">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-[#F6F6F8] dark:bg-graydark">
            <FaTimes className="text-danger"/>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Sem retorno
                </span>
                <span className="text-sm font-medium">120</span>
              </div>

              <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-danger"></span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-4">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-[#F6F6F8] dark:bg-graydark">
             < FaChartBar className="text-success"/>
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-black dark:text-white">
                  Positivas
                </span>
                <span className="text-sm font-medium">180</span>
              </div>

              <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-success"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
