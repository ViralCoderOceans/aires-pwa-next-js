/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  FunnelChart,
  Funnel,
  Cell,
  Tooltip,
  // LabelList,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Contacts', value: 525, extra: '+23 this week' },
  { name: 'Prospects', value: 390 },
  { name: 'Reservations', value: 290 },
  { name: 'On hold - recession', value: 125 },
  { name: 'Sold Firm', value: 100 },
];

const COLORS = ['#E8EBED', '#D0D6DB', '#A3AEB8', '#50697A', '#17364F'];

const CustomFunnelChart = () => {
  return (
    <div className="w-full relative flex items-center bg-white">
      <div className="z-[100] absolute top-[-8px] left-0 h-full w-full">
        <ResponsiveContainer width="70%" height={400}>
          <FunnelChart>
            <Tooltip
              content={<CustomTooltip active={false} payload={undefined} />}
            />
            <Funnel dataKey="value" data={data} isAnimationActive>
              {/* <LabelList position="inside" fill="#fff" stroke="none" dataKey="value" /> */}
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#F5F5F5"
                  strokeWidth={10}
                />
              ))}
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full h-full">
        {data.map((entry, index) => (
          <div
            key={index}
            className="relative h-[75px] w-full flex items-center justify-end"
          >
            <div className="w-[130px] flex flex-col gap-1">
              <div className="text-zinc-500 text-base font-normal leading-none">
                {entry.name}
              </div>
              <div className="flex gap-1 flex-wrap">
                <div className="text-zinc-950 text-base font-semibold leading-normal">
                  {entry.value}
                </div>
                {entry.extra && (
                  <div className="bg-green-100 text-green-700 text-xs p-1 rounded-md">
                    {entry.extra}
                  </div>
                )}
              </div>
            </div>
            {index + 1 < data.length && (
              <div className="w-[90vw] h-[1px] absolute bottom-0 left-0 border-b border-dashed border-zinc-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom Tooltip Component
const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded shadow-lg">
        <p className="text-sm font-semibold">{payload[0].payload.name}</p>
        <p className="text-sm">Value: {payload[0].value}</p>
        {payload[0].payload.extra && (
          <p className="text-xs text-green-700">{payload[0].payload.extra}</p>
        )}
      </div>
    );
  }

  return null;
};

export default CustomFunnelChart;

// import React from 'react';

// const FunnelChart = () => {
//   const data = [
//     { label: 'Contacts', value: 525, color: '#f2f2f2' },
//     { label: 'Prospects', value: 390, color: '#e0e0e0' },
//     { label: 'Reservations', value: 60, color: '#bdbdbd' },
//     { label: 'On hold - recession', value: 25, color: '#707070' },
//     { label: 'Sold Firm', value: 20, color: '#333333' },
//   ];

//   return (
//     <div className="container mx-auto mt-10">
//       <div className="grid grid-cols-2 gap-4">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-center">
//             <div
//               className={`w-24 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${item.color}`}
//             >
//               {item.value}
//             </div>
//             <div className="ml-4">
//               <p className="font-bold">{item.label}</p>
//               {index === 0 && (
//                 <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md font-bold text-xs">
//                   +23 this week
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FunnelChart;

// import React from 'react';
// import ZingChart from 'zingchart-react';
// import 'zingchart/es6'; // This line imports ZingChart

// const FunnelChart = () => {
//   const config = {
//     type: 'funnel',
//     // title: {
//     //   text: 'A Simple Funnel Chart'
//     // },
//     scaleY: {
//       placement: 'opposite',
//       labels: ['Site Visits', 'Trial Downloads', 'Quote Requests', 'Sales'],
//       item: {
//         fontColor: '#999999',
//       }
//     },
//     plot: {
//       valueBox: {
//         text: '%v visitors',
//         placement: 'left-out', //auto/in, top, bottom, left, right, leftout, or rightout
//         fontColor: 'gray',
//         fontSize: 12,
//         fontWeight: 'normal'
//       },
//     },
//     series: [
//       {
//         values: [525],
//         text: 'Contacts',
//         backgroundColor: '#E8EBED'
//       },
//       {
//         values: [390],
//         text: 'Prospects',
//         backgroundColor: '#D0D6DB'
//       },
//       {
//         values: [60],
//         text: 'Reservations',
//         backgroundColor: '#A3AEB8'
//       },
//       {
//         values: [25],
//         text: 'On hold - recession',
//         backgroundColor: '#50697A'
//       },
//       {
//         values: [20],
//         text: 'Sold Firm',
//         backgroundColor: '#17364F'
//       }
//     ]
//   };

//   return <ZingChart data={config} />;
// };

// export default FunnelChart;
