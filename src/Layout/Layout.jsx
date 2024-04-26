import React from "react";
import NavBar from "../components/NavBar";
import ServerContent from "../components/ServerContent";

export default function Layout({ children }) {
  return (
    <div className="flex bg-body-color text-gray-100">
      <NavBar />
      <ServerContent />
      {children}
    </div>
  );
}
