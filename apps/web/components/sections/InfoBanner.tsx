import { AlertCircle } from "lucide-react";

export default function InfoBanner() {
  return (
    <div className="bg-accent/10 border-b border-accent/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
        <AlertCircle className="size-5 text-accent shrink-0" />
        <p className="text-sm">
          <span className="font-semibold">Portfolio Project:</span> This website
          showcases an AI Real Estate agent with{" "}
          <span className="font-semibold">
            dummy data for demonstration purposes
          </span>
          . All property information and statistics are illustrative. If
          impressed, I{`'`}m ready to integrate real data and deploy for
          production! ✨
        </p>
      </div>
    </div>
  );
}
