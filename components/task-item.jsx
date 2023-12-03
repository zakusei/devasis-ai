import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaAlignLeft, FaTrash } from "react-icons/fa";

const TaskItem = ({ title, children, icon, parent, className }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Alert className={cn("mb-2 cursor-pointer hover:bg-muted", className)}>
          {icon}
          <AlertTitle className="text-xs">{title}</AlertTitle>
        </Alert>
      </DialogTrigger>
      <DialogContent className="rounded-md sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            <span className="flex gap-2">
              {icon}
              {title}
            </span>
          </DialogTitle>
          <DialogDescription className="flex justify-start">
            In list
            <span className="ml-1 underline underline-offset-2">{parent}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1">
          <div className="flex justify-between">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <FaAlignLeft />
              Description
            </span>
            <Button variant="link">
              <FaTrash />
            </Button>
          </div>
          <p className="h-24 w-full rounded-md bg-secondary p-4">{children}</p>
        </div>
        <DialogFooter className="gap-2 sm:justify-between sm:gap-0">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" variant="default">
            Mark as done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskItem;
