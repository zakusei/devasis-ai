import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(
  "relative mx-auto h-screen max-h-screen w-full items-center",
  {
    variants: {
      variant: {
        flexrow: "flex flex-1",
        flexcol: "flex flex-col",
      },
      justify: {
        start: "justify-start",
        end: "justify-end",
        center: "justify-center",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
    },
    defaultVariants: {
      variant: "flexcol",
      justify: "center",
    },
  },
);

const FlexContainer = ({ children, className, variant, justify }) => {
  return (
    <div
      className={cn(containerVariants(variant, justify, className), className)}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
