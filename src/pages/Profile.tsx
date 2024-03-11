const Profile = () => {
  return (
    <>
      <div className="lg:h-[97vh] h-[95vh] overflow-y-auto lg:px-8 px-3 lg:rounded-[1.4rem] bg-white">
        <h1 className="mt-6 lg:text-3xl text-2xl font-bold">Obaseki Noruwa</h1>
        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
        <div className="flex lg:flex-row flex-col items-start gap-6 mt-6">
          <div className="lg:w-48 lg:h-48 w-full apect-[3/3] rounded-md overflow-hidden">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold">User Info</h1>
            <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            <div className="space-y-4 my-7 lg:w-2/5 w-5/5">
              <div className="flex flex-row items-start justify-between">
                <h1 className="lg:text-base text-sm font-medium">Fullname</h1>
                <p className="text-sm font-medium">Full</p>
              </div>
              <div className="flex flex-row items-start justify-between">
                <h1 className="lg:text-base text-sm font-medium">Date</h1>
                <p className="text-sm font-medium">Date</p>
              </div>
              <div className="flex flex-row items-start justify-between">
                <h1 className="lg:text-base text-sm font-medium">
                  Email Status
                </h1>
                <p className="text-base font-medium">Verified</p>
              </div>
              <div className="flex flex-row items-start justify-between">
                <h1 className="lg:text-base text-sm font-medium">Balance</h1>
                <p className="text-sm font-medium">100,939,883.62</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
