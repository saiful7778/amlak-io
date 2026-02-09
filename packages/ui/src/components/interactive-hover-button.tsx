import { ArrowRight } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";

export function InteractiveHoverButton({
  children,
  className,
  size = "lg",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "variant">) {
  return (
    <Button
      variant="outline"
      size={size}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden border px-6 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-primary size-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </Button>
  );
}
