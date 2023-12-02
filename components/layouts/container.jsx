import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-screen w-full flex-1 flex-col bg-background p-6 md:container md:px-96",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
