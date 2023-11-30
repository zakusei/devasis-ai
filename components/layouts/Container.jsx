import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-screen w-full flex-1 flex-col p-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
