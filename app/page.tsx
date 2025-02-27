"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <div
        style={{
          transform: `translateX(${isOpen ? "0px" : "-260px"})`,
          transition: "transform 0.1s ease-in-out",
        }}
        className="fixed left-0 top-0 h-full w-[260px] z-50"
      >
        <button
          className="block w-10 h-10 p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          Open/Close1
        </button>
        <Sidebar />
      </div>
      <div
        style={{
          transform: `translateX(${isOpen ? "260px" : "0px"})`,
          transition: "transform 0.1s ease-in-out",
        }}
        className="bg-gray-200 flex-1"
      >
        <button
          className="block w-10 h-10 p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          Open/Close
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
