"use client";
import { ROUTES } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="fixed inset-x-6 bottom-6 h-16 rounded-full border bg-background shadow-lg">
      <ul className="grid h-full w-full grid-cols-3 place-content-center rounded-full">
        {ROUTES.map(({ href, icon }, index) => {
          return (
            <>
              <li key={index} className={`flex cursor-pointer justify-center`}>
                <Link
                  href={href}
                  className={`text-muted-foreground ${
                    href == path &&
                    "animate-pulse text-foreground ease-in-out dark:text-white"
                  } hover:text-foreground`}
                >
                  {icon}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
