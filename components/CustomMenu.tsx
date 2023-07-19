import { Menu } from "@headlessui/react";
import Image from "next/image";

type CustomMenuProps = {
  title: string;
  state: string;
  setState: (value: string) => void;
  filters: Array<string>;
};

const CustomMenu = ({ title, state, setState, filters }: CustomMenuProps) => {
  return (
    <div className="flexStart relative flex-col w-full gap-7">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>
      <Menu as="div" className="relative self-start">
        <div>
          <Menu.Button className="flexCenter custom_menu-btn">
            {state || "Select a category"}
            <Image
              src="/arrow-down.svg"
              height={5}
              width={10}
              alt="Arrow down"
            />
          </Menu.Button>
        </div>

        <Menu.Items className="flexStart custom_menu-items">
          {filters.map((tag) => (
            <Menu.Item key={tag}>
              <button
                type="button"
                value={tag}
                className="custom_menu-item"
                onClick={(e) => setState(e.currentTarget.value)}
              >
                {tag}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default CustomMenu;
