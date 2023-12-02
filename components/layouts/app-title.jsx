import { cn } from "@/lib/utils";

const Title = ({ className }) => {
  return (
    <h1
      className={cn(
        "mb-6 w-full text-center text-3xl font-semibold",
        className,
      )}
    >
      D E V A S I S
    </h1>
  );
};

export default Title;
