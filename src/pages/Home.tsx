/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = () => {
  const tableData = [
    {
      name: "Payment to Benson",
      date: "Nov 15, 2023",
      amount: "80,000",
      status: "Success",
    },
    {
      name: "Dstv subscription",
      date: "Nov 15, 2023",
      amount: "15,000",
      status: "Failed",
    },
    {
      name: "Netflix subscription",
      date: "Nov 14, 2023",
      amount: "4,000",
      status: "Success",
    },
    {
      name: "Transfer to Tim",
      date: "Nov 15, 2023",
      amount: "100,000",
      status: "Refund",
    },
    {
      name: "Withdrawal of ₦10,000",
      date: "Nov 13, 2023",
      amount: "10,000",
      status: "Success",
    },
  ];

  return (
    <div className="lg:h-[97vh] h-[100vh] overflow-y-auto lg:px-8 px-3 lg:rounded-[1.4rem] bg-gray-50">
      <Header />
      <div className="flex lg:flex-row flex-col lg:items-start justify-between gap-6 mb-6">
        <div className="lg:w-[54%] w-[100%]">
          <h1 className="text-xl mb-3"> Current balance</h1>
          <h2 className="lg:text-5xl text-3xl lg:mt-5 mt-2">100,993,382.83</h2>
          <div className="flex flex-row items-center gap-6 my-4">
            <button className="px-4 py-2 text-sm bg-white border-2 border-black rounded-lg">
              Withdraw
            </button>
            <button className="px-4 py-2 text-white bg-black text-sm border-2 border-black rounded-lg">
              Deposit
            </button>
          </div>
        </div>
        <div className="lg:w-[44%] w-[100%]">
          <h2 className="text-xl mb-3"> Your Assets</h2>
          <div className="grid grid-cols-4 gap-5">
            <div className="lg:col-span-2 sm:col-span-2 col-span-4 bg-white rounded-2xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-[0.8rem]">
              <div className="flex flex-row items-center justify-between">
                <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-2 rounded-full cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M19.3499 5.65995L13.0599 2.27C12.3999 1.91 11.5999 1.91 10.9299 2.27L4.63992 5.65995C4.17992 5.90995 3.8999 6.39998 3.8999 6.93998C3.8999 7.47998 4.17992 7.96995 4.63992 8.21995L10.9299 11.61C11.2599 11.79 11.6299 11.88 11.9899 11.88C12.3499 11.88 12.7199 11.79 13.0499 11.61L19.3399 8.21995C19.7999 7.96995 20.0799 7.47998 20.0799 6.93998C20.0999 6.39998 19.8099 5.90995 19.3499 5.65995Z"
                      fill="#34CAA5"
                    />
                    <path
                      opacity="0.4"
                      d="M9.90021 12.79L4.0502 9.86001C3.6002 9.63001 3.08021 9.66001 2.65021 9.92001C2.22021 10.18 1.97021 10.64 1.97021 11.14V16.67C1.97021 17.63 2.5002 18.49 3.3602 18.92L9.21021 21.8401C9.4102 21.9401 9.63022 21.99 9.85022 21.99C10.1102 21.99 10.3702 21.92 10.6002 21.77C11.0302 21.51 11.2802 21.05 11.2802 20.55V15.02C11.2902 14.08 10.7602 13.22 9.90021 12.79Z"
                      fill="#34CAA5"
                    />
                    <path
                      opacity="0.4"
                      d="M22.03 11.15V15.74C22.02 15.73 22.01 15.71 22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.82 21.11 15.03 21.37 15.26 21.61L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z"
                      fill="#34CAA5"
                    />
                    <path
                      d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z"
                      fill="#34CAA5"
                    />
                  </svg>
                </div>
                <button className="px-4 py-2 text-sm  border-2 border-gray-100 rounded-full">
                  Convert
                </button>
              </div>
              <h2 className="text-[#898989] font-medium my-2 text-[0.95em]">
                BTC
              </h2>
              <h3 className="lg:text-xl text-2xl font-semibold mT-2">350</h3>
            </div>
            <div className="lg:col-span-2 sm:col-span-2 col-span-4 bg-white dark:bg-[#0e1111] dark:text-white rounded-2xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-[0.8rem]">
              <div className="flex flex-row items-center justify-between">
                <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-2 rounded-full cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194ZM22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
                      fill="#34CAA5"
                    />
                    <path
                      d="M16.4004 8.20996L12.6404 6.17996C12.2404 5.96996 11.7704 5.96996 11.3704 6.17996L7.61038 8.20996C7.34038 8.35996 7.17041 8.64996 7.17041 8.97996C7.17041 9.30996 7.34038 9.59996 7.61038 9.74996L11.3704 11.78C11.5704 11.89 11.7904 11.94 12.0104 11.94C12.2304 11.94 12.4504 11.89 12.6504 11.78L16.4104 9.74996C16.6804 9.59996 16.8504 9.30996 16.8504 8.97996C16.8404 8.64996 16.6704 8.35996 16.4004 8.20996Z"
                      fill="#34CAA5"
                    />
                    <path
                      opacity="0.4"
                      d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z"
                      fill="#34CAA5"
                    />
                    <path
                      opacity="0.4"
                      d="M17.5904 10.7599C17.3304 10.5999 17.0204 10.5899 16.7504 10.7199L13.2504 12.4699C12.7404 12.7299 12.4204 13.2399 12.4204 13.8099V17.1199C12.4204 17.4199 12.5704 17.6899 12.8304 17.8499C12.9704 17.9399 13.1204 17.9799 13.2804 17.9799C13.4104 17.9799 13.5404 17.9499 13.6704 17.8899L17.1704 16.1399C17.6804 15.8799 18.0004 15.3699 18.0004 14.7999V11.4899C18.0004 11.1899 17.8504 10.9199 17.5904 10.7599Z"
                      fill="#34CAA5"
                    />
                  </svg>
                </div>
                <button className="px-4 py-2 text-sm  border-2 border-gray-100 rounded-full">
                  Convert
                </button>
              </div>
              <h2 className="text-[#898989] font-medium my-2 text-[0.95em]">
                ETH
              </h2>
              <h3 className="lg:text-xl text-2xl font-semibold mt-2">270</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-start justify-between gap-6 lg:mb-0 mb-8">
        <div className="lg:w-[60%] w-[100%] bg-white dark:bg-[#0e1111] dark:text-white rounded-2xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-4">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="font-semibold text-[0.94em]">Recent Transactions</h2>
            <Link to="" className="font-normal text-[0.94em] text-[#34CAA5]">
              See All
            </Link>
          </div>
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] my-3">
            <table className="table-auto overflow-x-auto w-full divide-y divide-gray-100 text-sm">
              <thead>
                <tr className="text-[#9CA4AB] flex flex-row items-center justify-between mb-3 gap-4">
                  <th className="w-40 text-start font-semibold">Name</th>
                  <th className="w-20 text-start font-semibold">Date</th>
                  <th className="w-20 text-start font-semibold">Amount</th>
                  <th className="w-20 text-start font-semibold">Status</th>
                  <th className="w-20 text-start font-semibold">Invoice</th>
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
                        <td className="w-20 text-start text-[#737373]">
                          {data.date}
                        </td>
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
                        <td className="w-20 flex flex-row items-center justify-start gap-2 cursor-pointer">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                              fill="#292D32"
                            />
                            <path
                              d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                              fill="#292D32"
                            />
                            <path
                              d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                              fill="#292D32"
                            />
                            <path
                              d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                              fill="#292D32"
                            />
                          </svg>

                          <span className="font-medium">View</span>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-[38%] w-[100%] lg:aspect-[4/3] aspect-[4/4] bg-black text-white rounded-2xl shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] lg:p-4 relative overflow-hidden">
          <div className="absolute lg:top-[37%] top-[34%] -translate-y-[50%] px-4">
            <h1 className="lg:text-5xl sm:text-3xl text-xl">
              Manage{" "}
              <span className="before:absolute lg:before:w-[5.2rem] before:w-[4.5rem] before:h-9 before:bg-gray-200 before:rounded-full before:content-[''] lg:before:-rotate-[20deg] before:-rotate-[10deg] lg:before:-translate-x-5 before:-translate-x-3 lg:before:translate-y-[0.9rem] before:translate-y-0 before:-z-10 lg:text-xl text-base bg-black py-1 px-4 rounded-xl border-2 border-white">
                asset
              </span>{" "}
              with BugdetBuddy
            </h1>
            <div className="mt-4">Track, manage and forcast your assets</div>
          </div>
          <div className="rounded-tl-lg absolute lg:bottom-0 -bottom-4 -right-4 border-2 border-white w-48 h-36 rotate-0"></div>
          <div className="rounded-lg absolute lg:-bottom-[6.5rem] -bottom-[8rem] -right-12 border-2 border-white w-[15rem] h-[12rem] rotate-[65deg]"></div>
          <div className="rounded-lg absolute lg:-bottom-[12.5rem] -bottom-[13.5rem] right-3 border-2 border-white w-[15rem] h-[12rem] rotate-[65deg]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
