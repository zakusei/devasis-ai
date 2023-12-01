"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
// import { links } from "@/data/nav-links";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { ModeToggle } from "@/components/toggle-mode";
import Image from "next/image";
import GDSC from "@/public/assets/img/gdsc.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const TopNav = () => {
  const pathname = usePathname();
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <header
      className={cn(
        `fixed inset-0 z-50 flex h-20 w-full items-center justify-start px-2 md:px-6 lg:top-0 xl:px-44`,
        isNavOpen &&
          `h-screen items-start bg-background/50 pt-[20px] backdrop-blur-md`,
      )}
    >
      <nav>
        <ul
          className={cn(
            `flex justify-center gap-8 md:items-center lg:static lg:flex-row xl:ml-20`,
            isNavOpen ? `fixed left-8 top-24 flex-col` : `hidden lg:flex`,
          )}
        >
          <Link
            href={pathname}
            className="hidden items-center space-x-4 md:flex"
          >
            <Image src={GDSC.src} width={48} height={48} />
            <h1 className="text-sm font-semibold">D E V A S I S</h1>
          </Link>
          {ROUTES.map(({ title, href, icon }, index) => (
            <li key={index} className="pl-0 xl:pl-8">
              <Link
                className={cn(
                  `ease flex items-center gap-2 pb-1 transition-all duration-75 hover:border-b hover:border-muted-foreground hover:font-medium`,
                  pathname == href &&
                    "border-b border-muted-foreground font-medium",
                )}
                href={href}
              >
                <span className="flex md:hidden">{icon}</span>
                {title}
              </Link>
            </li>
          ))}
          <li className="pl-0 xl:pl-8">
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => setNavOpen((prev) => !prev)}
          className="lg:hidden"
          variant="link"
        >
          {isNavOpen ? (
            <HiOutlineX className="h-8 w-8 rotate-180 text-foreground transition-all duration-100 ease-in-out animate-in repeat-1" />
          ) : (
            <HiOutlineMenuAlt4 className="h-8 w-8 rotate-180 text-foreground transition-all duration-100 ease-in-out animate-in repeat-1" />
          )}
        </Button>
      </div>
    </header>
  );
};
