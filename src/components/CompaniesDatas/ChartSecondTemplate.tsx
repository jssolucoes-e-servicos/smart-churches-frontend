"use client"

import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Lead } from "@/types/leads/leads";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

ChartJS.register(...registerables);

interface GraficosLeeadsProps {
    
    metric: Lead[];
  
  }

  //export default function CompsDateCharts({ metric }: { metric: { [key: string]: Lead[] } }) {
//export default function CompsDateCharts({ metric }: { metric:  Lead[] }) {

  export default function SecondDateCharts({ metric }: { metric:  Lead[] }) {
    //console.log(metric,'METROCA LEAD')
    //console.log(metric,'data');
    const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        const countLeadsByDate = () => {
            const counts: { [key: string]: number } = {};
        
            Object.values(metric).flat().forEach((lead:any) => {
                if (lead && lead) {
                    const startDate = new Date(lead);
                    const formattedDate = startDate.toISOString().slice(5, 10); // Pegando apenas mês e dia
                    counts[formattedDate] = (counts[formattedDate] || 0) + 1;
                }
            });

            return counts;
        };

        const counts = countLeadsByDate();
        setLeadCounts(counts);
    }, [metric]);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        return `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    });

    const leadData = datesOfMonth.map(date => leadCounts[date] || 0);
    const backgroundColors = leadData.map(count => count < 15 ? '#d1053cc8' : '#2381e0');
    const leadDataWithLabels = datesOfMonth.map((date, index) => ({
        x: date,
        y: leadData[index],
        label: leadData[index] < 15 ? 'Nível Baixo' : leadData[index].toString(),
    }));

    const data = {
        labels: datesOfMonth,
        datasets: [{
            label: "Leads por Data",
            backgroundColor: backgroundColors,
            data: leadDataWithLabels
        }]
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Quantidade de disparos por Data"
            }
        }
    };

    const handlePreviousMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    return (
        <div className="overflow-hidden">
            <div className="flex justify-around items-center ml-3 my-4 gap-20">
                <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousMonth}>
                <FaAngleLeft size={20}/> 
                </button>
                <h2 className=" w-80 text-sm font-semibold text-center text-gray-500 dark:text-neutral-500">Pesquisa por Data - {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMonth}>
                <FaAngleRight size={20}/>
                </button>
            </div>
            <div className="h-[500px] w-[100%] p-10">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

// "use client"
// import React, { useState, useEffect } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// interface Lead {
//   created_at: string; // A data de criação do lead deve estar no formato ISO
// }

// interface GraficosLeeadsProps {
//   metric:  Lead[] ;
// }

// export default function SecondDateCharts({ metric }: GraficosLeeadsProps) {
//     const [leadCounts, setLeadCounts] = useState<{ [key: string]: number }>({});
//   const [currentDate, setCurrentDate] = useState<Date>(new Date());

//   useEffect(() => {
//     console.log("Received metric:", metric);
  

//     const countLeadsByDate = (leads: Lead[]) => {
//       const counts: { [key: string]: number } = {};
//       if (Array.isArray(leads)) {
//         leads.forEach((lead: any) => {
//           if (lead) {
//             const startDate = new Date(lead.created_at);
//             const formattedDate = startDate.toISOString().slice(5, 10); // Pegando apenas mês e dia
//             counts[formattedDate] = (counts[formattedDate] || 0) + 1;
//           }
//         });
//       }
//       return counts;
//     };

//     const leadCounts = countLeadsByDate(metric);
//     console.log("Processed leadCounts:", leadCounts);
//     setLeadCounts(leadCounts);

    
//   }, [metric]);

//   const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
//   const datesOfMonth = Array.from({ length: daysInMonth }, (_, i) => {
//     const day = i + 1;
//     return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//   });

//   const leadData = datesOfMonth.map(date => leadCounts[date] || 0);

//   const handlePreviousMonth = () => {
//     setCurrentDate(prevDate => {
//       const newDate = new Date(prevDate);
//       newDate.setMonth(prevDate.getMonth() - 1);
//       return newDate;
//     });
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(prevDate => {
//       const newDate = new Date(prevDate);
//       newDate.setMonth(prevDate.getMonth() + 1);
//       return newDate;
//     });
//   };

//   return (
//     <div className="overflow-hidden">
//       <div className="flex justify-around items-center ml-3 my-4 gap-20">
//         <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousMonth}>
//           <FaAngleLeft size={20}/> 
//         </button>
//         <h2 className="w-80 text-sm font-semibold text-center text-gray-500 dark:text-neutral-500">
//           Pesquisa por Data - {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
//         </h2>
//         <button className="text-sm bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMonth}>
//           <FaAngleRight size={20}/>
//         </button>
//       </div>
//       <div className="flex flex-wrap justify-center p-10">
//         {datesOfMonth.map((date, index) => (
//           <div key={date} className="m-2 flex flex-col items-center">
//             <div className={`h-10 w-10 flex items-center justify-center rounded-full ${leadData[index] < 15 ? 'bg-red-300' : 'bg-blue-600'} text-white`}>
//               {leadData[index]} {/* Exibe o valor dos leads */}
//             </div>
//             <span>{leadData[index] < 15 ? 'Nível Baixo' : leadData[index].toString()}</span>
//             <div className="mt-2 text-sm text-center text-gray-500">{date}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






