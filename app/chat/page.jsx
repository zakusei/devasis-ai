import Container from "@/components/layouts/Container";
import Navbar from "@/components/layouts/Navbar";
import { TiMessage } from "react-icons/ti";
import { AlignLeft, LucideHash } from "lucide-react";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/layouts/Title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Chat = () => {
  return (
    <Container>
      {/* <header className="fixed inset-0 flex h-14 w-full items-center justify-center border-b bg-background px-4">
        <h1 className="text-sm font-semibold"></h1>
      </header> */}
      {/* <form className="mt-12 grid h-full grid-cols-1 place-content-center space-y-4">
        <div className="grid grid-cols-1 gap-4 rounded-3xl">
          <Title />
          <Textarea
            placeholder="How can I help you today?"
            className="resize-none"
          />
          <Button>
            Send
            <SendIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form> */}

      <div className="mt-16 grid h-full grid-cols-1 place-content-start space-y-8">
        <section className="space-y-4">
          <h1 className="flex items-center text-xl font-semibold">
            <AlignLeft className="mr-2 h-6 w-6" /> Hello World!
          </h1>
          <Separator />
          <article>
            <h1 className="flex items-center text-lg font-semibold">Answer</h1>
            <p className="text-sm leading-7">
              Lorem ipsum dolor sit amet consectetuer
            </p>
          </article>
        </section>
      </div>

      <Navbar />
    </Container>
  );
};

export default Chat;
