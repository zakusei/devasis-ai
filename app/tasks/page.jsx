import Container from "@/components/layouts/container";
import { TopNav } from "@/components/layouts/top-navigation";
import { Terminal, Laptop2, CheckIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import TaskItem from "@/components/task-item";
import { Separator } from "@/components/ui/separator";

const Tasks = () => {
  return (
    <Container>
      <TopNav />
      <div className="mt-12 grid grid-cols-1 md:mt-24 md:grid-cols-3">
        <section className="h-full w-full p-4">
          <h1 className="mb-6 flex text-sm font-semibold">
            <Laptop2 className="mr-2 h-4 w-4" /> Frontend Development
          </h1>
          <ScrollArea className="h-96">
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
          </ScrollArea>
        </section>
        <section className="h-full w-full p-4">
          <h1 className="mb-6 flex text-sm font-semibold">
            <Terminal className="mr-2 h-4 w-4" /> Backend Development
          </h1>
          <ScrollArea className="h-96">
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              title="Lorem ipsum."
              icon={<Terminal className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
          </ScrollArea>
        </section>
        <section className="h-full w-full p-4">
          <h1 className="mb-6 flex text-sm font-semibold">
            <CheckIcon className="mr-2 h-4 w-4" /> Completed Tasks
          </h1>
          <ScrollArea className="h-96">
            No task has been completed yet..
          </ScrollArea>
        </section>
      </div>
    </Container>
  );
};

export default Tasks;
