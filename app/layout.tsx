"use client";

import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import { useState, useEffect } from "react";
import QueryClientProvider from "./QueryClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const setOpenFn = () => {
    setIsOpen((pre) => !pre);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex w-full h-auto overflow-hidden">
          {/* Sidebar */}
          <div
            className={`fixed left-0 top-0 h-full w-[260px] text-white shadow-lg transition-transform duration-150 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar />
          </div>

          {/* Main Content */}
          <div
            className={`relative flex flex-col flex-1 transition-all duration-150 ${
              isOpen ? "ml-[260px]" : "ml-0"
            }`}
          >
            <Navbar isOpen={isOpen} setOpenFn={setOpenFn} />
            <QueryClientProvider>
              <div className="p-4">{children}</div>
            </QueryClientProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
