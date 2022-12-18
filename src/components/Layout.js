import React from "react";
import { Outlet } from "react-router-dom";
import BootBar from "./BootBar";

// Main layout for BootBar and Outlet (pages)
export default function Layout() {
  return (
    <div>
      <BootBar />
      <Outlet />
    </div>
  );
}
