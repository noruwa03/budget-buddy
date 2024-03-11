import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

type UserInput = {
  email: string;
};

const ForgotPassword = () => {
  const date = new Date();

  const userInput: UserInput = {
    email: "",
  };
  const [input, setInput] = useState(userInput);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  return (
    <>
      <div className="lg:px-16 py-8 flex flex-row justify-between">
        <div className="lg:w-[50%] w-screen relative">
          <div className="w-full">
            <div className="xl:mt-6 xl:mb-2 mt-16 mb-8 lg:w-4/5 w-[90%] lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-y-[50%] lg:-translate-x-[50%] mx-auto">
              <div className="w-5/5">
                <h1 className="sm:text-3xl text-2xl text-center text-black font-bold mb-2">
                  Forgot your password?
                </h1>

                <p className="text-[#959595] text-center mb-6">
                  A reset link will be sent to your email
                </p>

                <form
                  onSubmit={submitHandler}
                  className="lg:w-4/5 sm:w-4/5 w-5/5 mx-auto"
                >
                  {" "}
                  <label htmlFor="Email" className="lg:text-base text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    value={input.email}
                    onChange={onChangeHandler}
                    className="block w-full mt-1 mb-3 outline-none border-[1px] border-gray-300 focus:border-[#53777a] px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4]  placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
                    placeholder="name@gmail.com"
                  />
                  <button className="w-full bg-black py-4 outline-none text-white text-base font-medium mt-2 mb-2 rounded-lg">
                    Send Mail
                  </button>
                </form>
                <div className="w-full grid place-content-center text-sm text-start mt-6">
                  <Link to="/join/login">
                    <div className="flex flex-row space-x-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer [&>path]:hover:stroke-[#E85B67]"
                      >
                        <path
                          d="M6.56 14.5599L4 11.9999L6.56 9.43994"
                          stroke="#B2ABAB"
                          strokeWidth="1.5"
                          strokeMiterlimit={"10"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.23982 12H4.06982"
                          stroke="#B2ABAB"
                          strokeWidth="1.5"
                          strokeMiterlimit={"10"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.2398 12H12.2798"
                          stroke="#B2ABAB"
                          strokeWidth="1.5"
                          strokeMiterlimit={"10"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
                          stroke="#B2ABAB"
                          strokeWidth="1.5"
                          strokeMiterlimit={"10"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
                          stroke="#B2ABAB"
                          strokeWidth="1.5"
                          strokeMiterlimit={"10"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text-[#959595] text-base">
                        Back to Log in
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:block hidden h-[90vh] bg-black text-white overflow-hidden">
          <div className="h-full w-full relative">
            <div className="absolute top-[43%] -translate-y-[50%] px-8">
              <h1 className="text-5xl">
                Learn about{" "}
                <span className="before:absolute before:w-[5.2rem] before:h-9 before:bg-gray-200 before:rounded-full before:content-[''] before:-rotate-[20deg] before:-translate-x-5 before:translate-y-[0.9rem] before:-z-10 text-xl bg-black py-1 px-4 rounded-xl border-2 border-white">
                  asset
                </span>{" "}
                management with BugdetBuddy
              </h1>
              <div className="mt-4">
                Create worthy porfolios, deposit, send and receive money
              </div>
            </div>
            <div className="rounded-tl-lg absolute bottom-0 -right-4 border-2 border-white w-48 h-48 rotate-0"></div>
            <div className="rounded-lg absolute -bottom-[4.5rem] -right-9 border-2 border-white w-48 h-[16rem] rotate-[65deg]"></div>

            <div className="rounded-lg absolute -bottom-[8rem] -right-9 border-2 border-white w-48 h-[16rem] rotate-[65deg]"></div>

            <p className="absolute bottom-4 left-8 text-xs">
              BudgetBuddy {date.getFullYear()} © All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
