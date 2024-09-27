import Link from "next/link";
import { Button } from "../ui/button";
import NavBarArr from "@/utils/config";

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {NavBarArr.map((item, index) => (
        <Link key={item.label} href={item.link}>
          <Button key={index} variant="link">
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
