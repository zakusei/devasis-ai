"use client";
import { ROUTES } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 flex h-16 items-center border-t">
      <ul className="flex w-full justify-evenly">
        {ROUTES.map(({ href, icon }, index) => (
          <li key={index}>
            <Link
              href={href}
              className={`text-${
                href != path && "muted-"
              }foreground hover:text-foreground`}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
