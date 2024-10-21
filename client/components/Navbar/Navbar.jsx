'use client'
import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import {useState} from "react";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
export default function Navbar({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  );
}
