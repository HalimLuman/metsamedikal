import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDownSub from "./DropDownSub";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ menu, title }) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <div className="flex items-center nav-link gap-1">
          <MdKeyboardArrowDown className="text-lg" />
          <h1>{title}</h1>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#fff] text-gray-800 text-xs rounded-none">
        {menu.map((item, index) => (
          <DropDownSub
            key={index}
            category={item.category}
            link={item.link}
            subCategory={item.subcategory}
            title={title}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
