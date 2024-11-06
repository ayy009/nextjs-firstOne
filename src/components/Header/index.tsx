import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import SearchForm from "@/components/Header/SearchForm";


const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  // sidebarOpen: boolean ;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
      <div className="flex flex-grow items-center justify-between p-4  shadow-2 ">
                            {/* <!-- Dark Mode Toggle --> */}
                            {/* <Button onClick={e=>props.setSidebarOpen(!props.sidebarOpen)} /> */}

                            
                            <button
                            className="px-4"
      onClick={(e) => props.setSidebarOpen(!props.sidebarOpen)}

    >
      {/* SVG for Hamburger Icon */}
      <span className="relative block h-5.5 w-5.5 cursor-pointer ">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-[0] duration-200 ease-in-out dark:bg-white ${
                    "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-150 duration-200 ease-in-out dark:bg-white ${
                    "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-200 duration-200 ease-in-out dark:bg-white ${
                    "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-dark delay-300 duration-200 ease-in-out dark:bg-white ${
                    "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-dark duration-200 ease-in-out dark:bg-white ${
                    "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
                          </button>

            {/* <!-- Dark Mode Toggle --> */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}


          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden xl:block">
          <div>
            <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
             
            </h1>
 
          </div>
          
        </div>

        <div className="flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Search Form --> */}
            <SearchForm />
            {/* <!-- Search Form --> */}










            {/* <!-- Dark Mode Toggle --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggle --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
