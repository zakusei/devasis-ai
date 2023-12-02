import { cn } from "@/lib/utils";
import Image from "next/image";
import GDSC from "@/public/assets/img/gdsc.svg";

const Footer = ({ className }) => {
  return (
    <footer
      className={cn(
        "absolute inset-x-0 bottom-0 flex flex-col place-items-center gap-4 bg-transparent pb-12 text-center",
        className,
      )}
    >
      <Image width={32} height={32} src={GDSC.src} />
      <span className="text-xs font-medium">Google Developer Student Club</span>
    </footer>
  );
};

export default Footer;
