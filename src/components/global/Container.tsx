import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    // max-w-6xl xl:max-w-7xl or container
    <div className={cn("mx-auto container px-8", className)}>{children}</div>
  );
};

export default Container;
