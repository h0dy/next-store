import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { LucideAlignLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-4 max-w-[100px]" variant="outline">
          <LucideAlignLeft className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36" align="start" sideOffset={10}>
        {links.map((link) => {
          const { href, label } = link;
          return (
            <DropdownMenuItem key={href}>
              <Link className="capitalize " href={href}>
                {label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
