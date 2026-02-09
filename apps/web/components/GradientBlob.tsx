import { cn } from "@workspace/ui/lib/utils";

export default function GradientBlob({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute size-96 bg-primary/10 rounded-full blur-3xl animate-float duration-[2s] ease-in-out repeat-infinite [--offset:20px]",
        className,
      )}
      {...props}
    />
  );
}
