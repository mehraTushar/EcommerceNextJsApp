import { Button } from "../ui/button";
import NavBarArr from "@/utils/config";

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {NavBarArr.map((item, index) => (
        <Button key={index} variant="link">
          {item}
        </Button>
      ))}
    </div>
  );
}
