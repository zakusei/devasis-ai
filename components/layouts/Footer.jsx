import Image from "next/image";
import GDSC from "@/public/assets/img/gdsc.svg";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex flex-col place-items-center gap-4 pb-12 text-center ">
      <Image width={32} height={32} src={GDSC.src} />
      <span className="text-xs font-medium">Google Developer Student Club</span>
    </footer>
  );
};

export default Footer;
