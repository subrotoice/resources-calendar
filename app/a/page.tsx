"use client";

import { useState, useEffect } from "react";

export default function Sidebar() {
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
        className="fixed left-0 top-0 h-full w-[260px] bg-gray-800 text-white shadow-lg"
      >
        <div className="p-4">Side Menu</div>
      </div>
      <div
        style={{
          transform: `translateX(${isOpen ? "260px" : "0px"})`,
          transition: "transform 0.1s ease-in-out",
        }}
        className="bg-gray-200 text-white shadow-lg"
      >
        <button
          className="top-4 left-4 z-50 p-4 bg-gray-800 text-white rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        Lorem ipsum dolor
      </div>
    </div>
  );
}
