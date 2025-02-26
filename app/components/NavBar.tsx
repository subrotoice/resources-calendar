const Navbar = () => {
  return (
    <div>
      <nav className="top-0 inset-x-0 bg-white fixed h-auto z-30 transition-position w-screen lg:w-auto dark:bg-slate-800 layoutAsidePadding ml-60 shadow">
        <div className="flex lg:items-stretch xl:max-w-auto xl:mx-auto">
          <div className="flex flex-1 items-stretch h-auto">
            <div className="flex lg:hidden1 text-black-600 hover:text-black py-2 px-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
              <span className="inline-flex justify-center items-center w-6 h-6">
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z"
                  />
                </svg>
              </span>
              <div className="flex items-center text-center flex-1 pl-2 lg:text-center lg:pl-3 xl:text-center xl:pl-3 hidden">
                <img
                  src="https://soms.gov.bd/images/SOMS.gif"
                  className="cover w-auto h-10 sm:h-12 md:h-14"
                />
              </div>
              <div className="pl-3">
                <b className="text-gradient text-2xl drop-shadow hidden md:block">
                  স্মার্ট <span>অফিস ম্যানেজমেন্ট</span> সিস্টেম
                </b>
              </div>
            </div>
            <div className="hidden lg:flex1 xl:hidden text-black-600 hover:text-black py-2 px-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
              <span className="inline-flex justify-center items-center w-6 h-6">
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex text-black-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400 hidden">
              <div className="relative">
                <input
                  placeholder="Search (ctrl+k)"
                  type="text"
                  className="px-2 py-0 max-w-full focus:ring focus:outline-none border-gray-600 rounded-none w-full dark:placeholder-gray-400 h-9 border-0 bg-transparent"
                />
              </div>
            </div>
            <div className="flex text-black-600 hover:text-black my-2 mx-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400" />
          </div>
          <div className="flex-none items-stretch flex h-auto lg:hidden">
            <div className="flex text-black-600 hover:text-black py-2 px-3 items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
              <span className="inline-flex justify-center items-center w-6 h-6">
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-20 left-0 bg-white shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800 hidden">
            <div className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black lg:py-2 lg:px-3">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-2 lg:p-0">
                <span className="inline-flex justify-center items-center w-5 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                    />
                  </svg>
                </span>
                <span className="px-0 transition-colors"> </span>
                <span className="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700 lg:hidden">
                <a className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
                  <div className="flex items-center">
                    <span className="px-0 transition-colors">
                      অন্যান্য মডিউল
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <a className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
              <div className="flex items-center">
                <span className="inline-flex justify-center items-center w-5 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    />
                  </svg>
                </span>
                <span className="px-0 transition-colors">বার্তা</span>
              </div>
            </a>
            <div className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black lg:py-2 lg:px-3">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-2 lg:p-0">
                <div className="w-9 h-10 mr-0 inline-flex rounded-full">
                  <img
                    src="https://soms.gov.bd/backoffice/uploads/userphotos/1667726621.jpg"
                    className="rounded-full block max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>

                <span className="px-0 transition-colors">
                  সুব্রত কুমার বিশ্বাস
                  <div className="text-xs text-blue-900">
                    প্রোগ্রামার, প্রোগ্রামার এর দপ্তর
                    <br />
                    জেলা তথ্য ও যোগাযোগ প্রযুক্তি কার্যালয়, মেহেরপুর
                  </div>
                </span>
                <span className="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700 lg:hidden">
                <a className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
                  <div className="flex items-center">
                    <span className="inline-flex justify-center items-center w-5 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                        />
                      </svg>
                    </span>
                    <span className="px-0 transition-colors">
                      আপনার দপ্তর সমূহ
                    </span>
                  </div>
                </a>
                <a className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
                  <div className="flex items-center">
                    <span className="inline-flex justify-center items-center w-5 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                        />
                      </svg>
                    </span>
                    <span className="px-0 transition-colors">প্রোফাইল</span>
                  </div>
                </a>
                <hr className="hidden lg:block lg:my-0.5 dark:border-slate-700 border-t border-gray-100" />
                <div className="block lg:flex items-center relative cursor-pointer text-black-600 dark:text-white dark:hover:text-slate-400 hover:text-black py-2 px-3">
                  <div className="flex items-center">
                    <span className="inline-flex justify-center items-center w-5 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
                        />
                      </svg>
                    </span>
                    <span className="px-0 transition-colors">লগআউট</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-t">
          <div className="w-full px-0 pt-1 border-l-2 flex">
            <ol className="list-reset flex items-center">
              <li>
                <a
                  aria-current="page"
                  href="#/"
                  className="router-link-active router-link-exact-active text-grey-500 hover:text-blue-700"
                >
                  <span className="inline-flex justify-center items-center w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      width={22}
                      height={22}
                      className="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <span className="text-gray-400 mx-1">/</span>
              </li>
              <li className="text-green-900 text-base">
                স্মার্ট অফিস ম্যানেজমেন্ট
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
