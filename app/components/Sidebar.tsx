"use client";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <aside id="aside" className={`lg:py-0 lg:pl-0 w-full`}>
      <div className="bg-white lg:rounded-0 flex-1 flex flex-col overflow-hidden ">
        <div className="flex flex-row h-16 items-center justify-between ">
          <div className="flex justify-between items-center text-center flex-1 pl-2 lg:text-center lg:pl-3 xl:text-center xl:pl-3 cursor-pointer">
            <img
              src="https://soms.gov.bd/images/SOMS.gif"
              className="cover w-auto h-10 md:h-12"
            />
          </div>
          <button className="hidden lg:inline-block xl:hidden p-3">
            <span className="inline-flex justify-center items-center w-6 h-6">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="aside-scrollbars-light flex-1 overflow-y-auto overflow-x-hidden">
          <Menu />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
