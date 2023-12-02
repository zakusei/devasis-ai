import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const TaskItem = ({ title, children, icon, className }) => {
  return (
    <Alert className={cn("mb-2 cursor-pointer hover:bg-muted", className)}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default TaskItem;
