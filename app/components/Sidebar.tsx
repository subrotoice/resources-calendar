const Sidebar = () => {
  return (
    <div>
      <aside
        id="aside"
        className="lg:py-0 lg:pl-0 w-60 shadow-lg fixed flex z-40 top-0 h-screen transition-position overflow-hidden left-0 lg:hidden xl:flex"
      >
        <div className="bg-white lg:rounded-0 flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
          <div className="flex flex-row h-16 items-center justify-between dark:bg-slate-900">
            <div className="flex justify-start items-center text-center flex-1 pl-2 lg:text-center lg:pl-3 xl:text-center xl:pl-3 cursor-pointer">
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
            <ul>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1 pr-12">
                      ড্যাশবোর্ড
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1">
                      বদলি ব্যবস্থাপনা
                    </span>
                    <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                      </svg>
                    </span>
                  </div>
                </a>
                <ul className="bg-gray-100/75 block dark:bg-slate-800/50">
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          নিজের বদলি
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          বদলির অনুমোদন
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M16.5,15.5H22V17H16.5V18.75L14,16.25L16.5,13.75V15.5M19.5,19.75V18L22,20.5L19.5,23V21.25H14V19.75H19.5M9.5,5.5A2,2 0 0,1 7.5,3.5A2,2 0 0,1 9.5,1.5A2,2 0 0,1 11.5,3.5A2,2 0 0,1 9.5,5.5M5.75,8.9L4,9.65V13H2V8.3L7.25,6.15C7.5,6.05 7.75,6 8,6C8.7,6 9.35,6.35 9.7,6.95L10.65,8.55C11.55,10 13.15,11 15,11V13C12.8,13 10.85,12 9.55,10.4L8.95,13.4L11,15.45V23H9V17L6.85,15L5.1,23H3L5.75,8.9Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          ট্রান্সফার প্ল্যানিং টুল
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1">
                      ছুটি ব্যবস্থাপনা
                    </span>
                    <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <ul className="bg-gray-100/75 hidden">
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          ছুটির আবেদন
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          ছুটির অনুমোদন
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          ছুটির বিস্তারিত
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          ছুটির ইতিহাস
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          ছুটি অনুমোদনকারী
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1">
                      দপ্তর ব্যবস্থাপনা
                    </span>
                    <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <ul className="bg-gray-100/75 hidden">
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          অফিসের তথ্য সংশোধন
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          অফিস অ্যাডমিন
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          অনারবোর্ড
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1">
                      কর্মকর্তা ব্যবস্থাপনা
                    </span>
                    <span className="inline-flex justify-center items-center w-12 h-6 flex-none">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <ul className="bg-gray-100/75 hidden">
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          কর্মকর্তার তালিকা
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          চাকুরী সংক্রান্ত তথ্য
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          কর্ম ইতিহাস
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          নতুন কর্মকর্তা
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer items-center">
                      <div className="flex cursor-pointer border-b items-center py-2 px-4 text-sm text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                        <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                          <svg
                            viewBox="0 0 24 24"
                            width={18}
                            height={18}
                            className="inline-block"
                          >
                            <path
                              fill="currentColor"
                              d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                            />
                          </svg>
                        </span>
                        <span className="grow text-ellipsis line-clamp-1 pr-12">
                          কর্মকর্তা পদায়ন
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1 pr-12">
                      দক্ষতা সমূহ
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1 pr-12">
                      উদ্ভাবনী ব্যবস্থাপনা
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a className="cursor-pointer items-center">
                  <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 mt-0">
                    <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                      <svg
                        viewBox="0 0 24 24"
                        width={18}
                        height={18}
                        className="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M21,12.13C20.85,12.14 20.71,12.19 20.61,12.3L19.61,13.3L21.66,15.3L22.66,14.3C22.88,14.09 22.88,13.74 22.66,13.53L21.42,12.3C21.32,12.19 21.18,12.14 21.04,12.13M19.04,13.88L13,19.94V22H15.06L21.12,15.93M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H11V19.11L19.24,10.89C19.71,10.4 20.36,10.13 21.04,10.13C21.38,10.13 21.72,10.19 22.04,10.32V6C22.04,4.88 21.12,4 20,4M20,8L12,13L4,8V6L12,11L20,6"
                        />
                      </svg>
                    </span>
                    <span className="grow text-ellipsis line-clamp-1 pr-12">
                      সাপোর্ট
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
