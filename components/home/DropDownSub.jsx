import React from "react";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const DropDownSub = ({ category, link, subCategory }) => {
  return (
    <DropdownMenuSub>
      <Link href={`/products/${link}`}>
        <DropdownMenuSubTrigger>
        <span className="w-full cursor-pointer">{category}</span></DropdownMenuSubTrigger>
      </Link>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {subCategory.map((item,index) => (
            <Link href={`/products/${link}/${item.link}`} key={index+ 2}>
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
