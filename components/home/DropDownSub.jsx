import React from "react";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import { Mail, MessageSquare, PlusCircle, UserPlus } from "lucide-react";
import Link from "next/link";

const DropDownSub = ({ category, link, subCategory }) => {
  return (
    <DropdownMenuSub>
      <Link href={link}>
        <DropdownMenuSubTrigger>
        <span className="w-full cursor-pointer">{category}</span></DropdownMenuSubTrigger>
      </Link>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {subCategory.map((item) => (
            <Link href={item.link} key={item.category}>
              <DropdownMenuItem className="py-1">
                <span className="w-full cursor-pointer">
                  {item.category}
                </span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default DropDownSub;
