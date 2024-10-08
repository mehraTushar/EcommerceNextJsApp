"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import NavBarArr from "@/utils/config";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col items-start">
          {NavBarArr.map((item, index) => (
            <Link key={item.label} href={item.link}>
              <Button
                key={index}
                variant="link"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
