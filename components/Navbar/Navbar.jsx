import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  return (
    <header className="w-full border-b flex items-center justify-between mx-4">
      <div>Shopping</div>
      <div className="flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
