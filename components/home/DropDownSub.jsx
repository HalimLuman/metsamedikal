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
    <DropdownMenuSub>
      {title === t('products') ? (
        <Link href={`/products/${link}`}>
          <DropdownMenuSubTrigger>
            <span className="w-full cursor-pointer">{t(category)}</span>
          </DropdownMenuSubTrigger>
        </Link>
      ) : (
        <DropdownMenuSubTrigger>
          <span className="w-full cursor-pointer">{t(category)}</span>
        </DropdownMenuSubTrigger>
      )}

      <DropdownMenuPortal>
        <DropdownMenuSubContent>
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
                <DropdownMenuItem className="py-2">
                  <span className="w-full cursor-pointer">{t(item.category)}</span>
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
