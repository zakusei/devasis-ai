import Container from "@/components/layouts/container";
import { TopNav } from "@/components/layouts/top-navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FaAlignLeft,
  FaShare,
  FaListUl,
  FaCopy,
  FaLayerGroup,
  FaPlus,
  FaChevronRight,
} from "react-icons/fa";
import { SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const Chat = () => {
  return (
    <Container>
      <ScrollArea className="relative mt-20 grid h-screen grid-cols-1 place-content-start px-2">
        <section className="mb-20 h-fit w-full space-y-4">
          <p className="flex items-center gap-2 text-xl font-normal">
            <FaChevronRight /> Hello World!
          </p>
          <h1 className="flex items-center gap-2 text-sm font-bold">
            <FaListUl className="h-4 w-4" />
            Sources
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <Skeleton className="h-16 w-full cursor-pointer" />
            <Skeleton className="h-16 w-full cursor-pointer" />
            <Skeleton className="h-16 w-full cursor-pointer" />
            <Skeleton className="h-16 w-full cursor-pointer" />
          </div>
          <h1 className="flex items-center gap-2 text-sm font-bold">
            <FaAlignLeft className="h-4 w-4" />
            Answer
          </h1>
          <p className="text-sm font-light leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, velit ac bibendum bibendum, elit nisi bibendum ipsum, vel
            bibendum velit sapien vel velit. Sed euismod, velit ac bibendum
            bibendum, elit nisi bibendum ipsum, vel bibendum velit sapien vel
            velit. Sed euismod, velit ac bibendum bibendum, elit nisi bibendum
            ipsum, vel bibendum velit sapien vel velit. Sed euismod, velit ac
            bibendum bibendum, elit nisi bibendum ipsum, vel bibendum velit
            sapien vel velit.
          </p>
          <ul className="flex">
            <li>
              <Button variant="link">
                <FaCopy />
              </Button>
            </li>
            <li>
              <Button variant="link">
                <FaShare />
              </Button>
            </li>
          </ul>
          <Separator />
          <h1 className="flex items-center gap-2 text-sm font-bold">
            <FaLayerGroup className="h-4 w-4" />
            Related
          </h1>
          <div className="grid w-full grid-cols-1 gap-2">
            <Button variant="outline" className="flex justify-between">
              <span>How to design a database schema?</span>
              <FaPlus />
            </Button>
            <Button variant="outline" className="flex justify-between">
              <span>How will my frontend and backend work together?</span>
              <FaPlus />
            </Button>
            <Button variant="outline" className="flex justify-between">
              <span>How to center a div?</span>
              <FaPlus />
            </Button>
          </div>
        </section>
      </ScrollArea>
      <div className="fixed inset-x-0 bottom-0 flex h-10 w-full items-center justify-between gap-0 border-t bg-background/10 p-8 backdrop-blur-xl md:container md:bottom-4 md:border-t-0 md:px-96">
        <Input
          type="text"
          className="rounded-full rounded-r-none border-r-0 md:p-6"
          placeholder="Type something here.."
        />
        <Button
          variant="outline"
          className="rounded-none rounded-r-full border-l-0 md:p-6"
        >
          <SendIcon className="h-4 w-6" />
        </Button>
      </div>
      <TopNav />
    </Container>
  );
};

export default Chat;
