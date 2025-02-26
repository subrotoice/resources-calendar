import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  return (
    <div>
      <div className="overflow-hidden lg:overflow-visible bg-green-100/90">
        <div className="layoutAsidePadding ml-60 pt-14 min-h-screen w-screen transition-all lg:w-auto bg-gray-200/60 dark:bg-slate-800 dark:text-slate-100">
          <Navbar />
          <Sidebar />
          <div
            className="flex z-30 items-center flex-col justify-center overflow-hidden fixed inset-0"
            style={{ display: "none" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-white via-gray-100 to-white" />
            {/**/}
          </div>
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
