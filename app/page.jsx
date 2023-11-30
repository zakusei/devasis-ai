import FlexContainer from "@/components/layouts/Container";
import Title from "@/components/layouts/Title";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TiFolderAdd, TiFolder } from "react-icons/ti";
import Footer from "@/components/layouts/Footer";

const Home = () => {
  return (
    <FlexContainer>
      <section className="grid w-full max-w-xs gap-2.5 rounded-md">
        <Title />
        <Link
          href="/create"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <TiFolderAdd className="mr-2 h-4 w-4" />
          New Project
        </Link>
        <Link href="#" className={cn(buttonVariants({ variant: "default" }))}>
          <TiFolder className="mr-2 h-4 w-4" />
          Open Project
        </Link>
      </section>
      <Footer />
    </FlexContainer>
  );
};

export default Home;
