/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";

const Asset = () => {
  const tableData = [
    {
      name: "Bitcoin",
      date: "Nov 15, 2023",
      amount: "80,000",
      status: "Success",
    },
    {
      name: "Ethereum",
      date: "Nov 15, 2023",
      amount: "150,000",
      status: "Failed",
    },
    {
      name: "USDT",
      date: "Nov 14, 2023",
      amount: "87,000",
      status: "Success",
    },
    {
      name: "Cosmos",
      date: "Nov 15, 2023",
      amount: "100,000",
      status: "Refund",
    },
    {
      name: "Spark",
      date: "Nov 13, 2023",
      amount: "78,000",
      status: "Success",
    },
  ];

  return (
    <div className="lg:h-[97vh] h-[100vh] overflow-y-auto lg:px-8 px-3 lg:rounded-[1.4rem] bg-white">
      {" "}
      <div className="my-6">
        <h2 className="font-semibold lg:text-2xl text-lg">All Assets</h2>
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] my-3">
          <table className="table-auto overflow-x-auto w-full divide-y divide-gray-100 text-sm">
            <thead>
              <tr className="text-[#9CA4AB] flex flex-row items-center justify-between mb-3 gap-4">
                <th className="w-40 text-start font-semibold">Name</th>
                <th className="w-36 text-start font-semibold">Purchase Date</th>
                <th className="w-28 text-start font-semibold">Value</th>
                <th className="w-20 text-start font-semibold">Amount</th>
                <th className="w-20 text-start font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="text-[0.9em] divide-y divide-gray-100 dark:[&>tr>td>svg>path]:fill-white">
              {tableData.map((data: any, index: number) => {
                return (
                  <Fragment key={index}>
                    <tr className="flex flex-row items-center justify-between py-[0.73rem] gap-3">
                      <td className="w-40 text-start">
                        <p className="font-medium">{data.name}</p>
                      </td>
                      <td className="w-36 text-start text-[#737373]">
                        {data.date}
                      </td>
                      <td className="w-28 text-start font-semibold">1.3949</td>

                      <td className="w-20 text-start font-semibold">
                        ₦ {data.amount}
                      </td>
                      <td
                        className={`w-20 text-start ${
                          data.status === "Success"
                            ? "text-[#34CAA5]"
                            : data.status === "Failed"
                            ? "text-[#ED544E]"
                            : "text-yellow-400"
                        }`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Asset;
