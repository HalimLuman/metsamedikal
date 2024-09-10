import React from "react";
import {
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const DropDownSub = ({ category, link, subCategory, title, link2 }) => {
  const { t } = useTranslation();

  return (
    <DropdownMenuSub className="bg-[#585858]">
      {title === t('products') ? (
        <Link href={`/products/${link}`}>
          <DropdownMenuSubTrigger className="rounded-none hover:text-white">
            <span className="w-full cursor-pointer text-xs">{t(category)}</span>
          </DropdownMenuSubTrigger>
        </Link>
      ) : ( 
        <DropdownMenuSubTrigger className="rounded-none hover:text-white">
          <span className="w-full cursor-pointer text-xs">{t(category)}</span>
        </DropdownMenuSubTrigger>
      )}

      <DropdownMenuPortal>
        <DropdownMenuSubContent className="bg-[#585858] text-gray-300 rounded-none border-none">
          {subCategory.map((item, index) =>
            item.subcategory ? (
              <DropDownSub
                key={index}
                category={item.category}
                link={item.link}
                link2={link2 ? `${link2}/${link}` : link} // Pass down the full parent path
                subCategory={item.subcategory}
                title={title}
              />
            ) : (
              <Link
                href={`${
                  title === t('products')
                    ? `/products/${link2 ? `${link2}/${link}` : link}/${item.link}`
                    : `/diseases/${link2 ? `${link2}/${link}` : link}/${item.link}`
                }`}
                key={index}
              >
                <DropdownMenuItem className=" hover:bg-primary-blue rounded-none text-xs">
                  <span className="w-full cursor-pointer text-xs">{t(item.category)}</span>
                </DropdownMenuItem>
              </Link>
            )
          )}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default DropDownSub;
