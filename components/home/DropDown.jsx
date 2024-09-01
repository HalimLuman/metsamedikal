import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDownSub from "./DropDownSub";
import { dropdownMenu } from "@/constants";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center nav-link gap-1">
          <MdKeyboardArrowDown className="text-lg" />
          <h1>Products</h1>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dropdownMenu.map((item,index) => (
          <DropDownSub
            category={item.index+1}
            link={item.link}
            subCategory={item.subcategory}
            key={item.category}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
