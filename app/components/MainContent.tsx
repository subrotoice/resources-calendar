const MainContent = () => {
  return (
    <div>
      <div className="h-full w-full mt-6 md:mt-12 pt-1 pb-8">
        <section className="px-0 mt-0 xl:max-w-auto xl:mx-auto">
          <div>
            <div className="lg:flex lg:flex-row justify-center items-center space-x-6 pt-4 3xl:pt-20">
              <a href="#/officeinfo" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-teal-400 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://free-icon-rainbow.com/i/icon_04139/icon_041390_256.png"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-teal-500 text-white py-2 px-10 text-xl">
                    দপ্তর ব্যবস্থাপনা
                  </div>
                </div>
              </a>
              <a href="#/officers" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-teal-400 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3616/3616927.png"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-sky-600 text-white py-2 px-10 text-xl">
                    কর্মকর্তা ব্যবস্থাপনা
                  </div>
                </div>
              </a>
              <a href="#/leaveapprovals" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-purple-700 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://img.freepik.com/free-vector/quitting-time-concept-illustration_114360-2747.jpg"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-cyan-700 text-white py-2 px-10 text-xl">
                    ছুটি অনুমোদন
                  </div>
                </div>
              </a>
              <a href="#/userskills" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-purple-700 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-key-skills-line-icon-vector-png-image_6703008.png"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-purple-700 text-white py-2 px-10 text-xl">
                    দক্ষতা ব্যবস্থাপনা
                  </div>
                </div>
              </a>
              <a href="#/report-mgt/report-dashboard" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-purple-700 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2289/2289301.png"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-gray-700 text-white py-2 px-10 text-xl">
                    রিপোর্ট ব্যবস্থাপনা
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:flex lg:flex-row justify-center items-center space-x-6 pt-4 3xl:pt-8">
              <a href="#/training-mgt" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-green-700 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://www.freeiconspng.com/thumbs/training-icon/training-icon-2.png"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-green-700 text-white py-2 px-10 text-xl">
                    প্রশিক্ষণ ব্যাবস্থাপনা
                  </div>
                </div>
              </a>
              <a href="#/lab-mgt" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-orange-400 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://t4.ftcdn.net/jpg/00/12/12/11/360_F_12121143_llO40dmkVP4NEJ5BOPwV3OtiqdyikgHL.jpg"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-orange-600 text-white py-2 px-5 text-xl">
                    আইসিটিডি ডিজিটাল ল্যাব
                  </div>
                </div>
              </a>
              <a href="#/freelancer-mgt" className="">
                <div className="flex-col justify-center items-center border-0 hover:scale-105 hover:border-indigo-400 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://img.freepik.com/premium-vector/freelancer-sitting-by-computer-work-from-home_316839-4025.jpg"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-indigo-700 text-white py-2 px-10 text-xl">
                    ফ্রিল্যান্সার ব্যবস্থাপনা
                  </div>
                </div>
              </a>
              <a href="#/inspection-mgt" className="">
                <div className="flex-col justify-center items-center border-0 rounded-0 hover:scale-105 hover:border-yellow-400 pt-3 shadow-2xl bg-white transition-all duration-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9789/9789385.png"
                    className="bg-cover mx-auto h-28 mb-1"
                  />
                  <div className="rounded-t-2xl text-center bg-yellow-500 text-white py-2 px-10 text-xl">
                    পরিদর্শন ব্যবস্থাপনা
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:flex lg:flex-row justify-center items-center space-x-6 pt-4 3xl:pt-8"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
