import FlexContainer from "@/components/layouts/Container";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TiFolderAdd, TiFolder } from "react-icons/ti";

const Home = () => {
  return (
    <FlexContainer>
      <section className="grid w-full max-w-xs gap-2 rounded-md">
        <h1 className="mb-6 w-full text-center text-3xl font-semibold">
          D E V A S I S
        </h1>
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
    </FlexContainer>
  );
};

export default Home;
