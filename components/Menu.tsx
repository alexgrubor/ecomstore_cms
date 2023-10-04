"use client";

import { Store } from "@prisma/client";
import StoreSwitcher from "./StoreSwitcher";
import PrimaryNav from "./PrimaryNav";
import ThemeToggle from "./ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { useResponsivity } from "@/hooks/useResponsivity";
import { useState } from "react";
import { XIcon, AlignJustify } from "lucide-react";

interface MenuProps {
  stores: Store[];
}
const Menu = ({ stores }: MenuProps) => {
  const { isMobile } = useResponsivity();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isMobile && (
        <div className="flex h-16 items-center px-4">
          <StoreSwitcher items={stores} />
          <PrimaryNav className="mx-6" isMobile={false} />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex h-16 items-center px-4">
          <StoreSwitcher items={stores} />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Menu"
              className="w-8 h
-8"
            >
              {isOpen ? <XIcon /> : <AlignJustify />}
            </button>
            {isOpen && <PrimaryNav isMobile />}
          </div>
        </div>
      )}
    </>
  );
};
export default Menu;
