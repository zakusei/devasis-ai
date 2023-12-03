import Container from "@/components/layouts/container";
import { TopNav } from "@/components/layouts/top-navigation";
import {
  Terminal,
  DatabaseIcon,
  Code2Icon,
  ListIcon,
  Laptop2,
  CheckIcon,
} from "lucide-react";
import { GoKebabHorizontal } from "react-icons/go";

import { ScrollArea } from "@/components/ui/scroll-area";
import TaskItem from "@/components/task-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Tasks = () => {
  return (
    <Container>
      <TopNav />
      <div className="mt-12 grid grid-cols-1 md:mt-24 md:grid-cols-3">
        <section className="h-full w-full rounded-md p-4">
          <div className="mb-2 flex justify-between">
            <h1 className="flex items-center text-sm font-semibold">
              <ListIcon className="mr-2 h-4 w-4" /> Todo List
            </h1>
            <Button variant="ghost">
              <GoKebabHorizontal />
            </Button>
          </div>
          <ScrollArea className="h-full">
            <TaskItem
              parent="Todo List"
              title="Landing Page"
              icon={<Code2Icon className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              parent="Todo List"
              title="Sign In Page"
              icon={<Code2Icon className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              parent="Todo List"
              title="Sign Up Page"
              icon={<Code2Icon className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
            <TaskItem
              parent="Todo List"
              title="Setup API Endpoints"
              icon={<Code2Icon className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
          </ScrollArea>
        </section>
        <section className="h-full w-full rounded-md p-4">
          <div className="mb-2 flex justify-between">
            <h1 className="flex items-center text-sm font-semibold">
              <Code2Icon className="mr-2 h-4 w-4" /> In Progress
            </h1>
            <Button variant="ghost">
              <GoKebabHorizontal />
            </Button>
          </div>
          <ScrollArea className="h-full">
            <TaskItem
              parent="In Progress"
              title="Database Schema"
              icon={<DatabaseIcon className="h-4 w-4" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TaskItem>
          </ScrollArea>
        </section>
        <section className="h-full w-full rounded-md p-4">
          <div className="mb-2 flex justify-between">
            <h1 className="flex items-center text-sm font-semibold">
              <CheckIcon className="mr-2 h-4 w-4" /> Completed
            </h1>
            <Button variant="ghost">
              <GoKebabHorizontal />
            </Button>
          </div>
          <ScrollArea className="h-full"></ScrollArea>
        </section>
      </div>
    </Container>
  );
};

export default Tasks;
