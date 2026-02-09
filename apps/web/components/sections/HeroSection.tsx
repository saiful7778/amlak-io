import { Sparkles, Search, MapPin } from "lucide-react";
import PropertyMarquee from "../PropertyMarquee";
import { Button } from "@workspace/ui/components/button";
import { InteractiveHoverButton } from "@workspace/ui/components/interactive-hover-button";
import { GridPattern } from "@workspace/ui/components/grid-pattern";
import { AnimatedGradientText } from "@workspace/ui/components/animated-gradient-text";
import GradientBlob from "../GradientBlob";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-linear-to-l from-background via-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientBlob className="-top-40 -right-40" />
        <GradientBlob className="top-1/2 -translate-1/2 -right-40" />
        <GradientBlob className="-bottom-40 -left-40" />

        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <GridPattern
        width={60}
        height={50}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className="mask-[radial-gradient(400px_circle_at_center,var(--primary),transparent)] inset-0 skew-y-12"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-scroll-in-left duration-1000 ease-in-out repeat-initial [--offset:50px]">
            {/* Premium Badge */}
            <div className="inline-flex relative items-center gap-2 bg-muted/50 border border-primary/30 rounded-full py-1 px-2 hover:border-primary/60 transition-all">
              <Sparkles className="size-4 text-primary animate-pulse-glow repeat-infinite ease-linear duration-[2s]" />
              <hr className="h-4 w-px shrink-0 bg-neutral-500" />
              <AnimatedGradientText className="text-sm font-medium">
                Powered by Advanced AI
              </AnimatedGradientText>
            </div>

            {/* Main headline - Premium styling */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Intelligent Real Estate{" "}
              <AnimatedGradientText>Assistant</AnimatedGradientText>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground text-balance leading-relaxed font-light">
              Discover, compare, and invest in Dubai&apos;s finest properties
              with an AI agent that understands your needs. Powered by
              cutting-edge artificial intelligence for smarter property search.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <InteractiveHoverButton size="lg" className="h-12">
                Start Chat with AI Agent
              </InteractiveHoverButton>
              <Button size="lg" variant="outline" className="h-12 px-6">
                <Search className="w-5 h-5" />
                Browse Properties
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-card/40 backdrop-blur border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  Smart Search
                </h3>
                <p className="text-xs text-muted-foreground">
                  Advanced filters and AI recommendations
                </p>
              </div>
              <div className="bg-card/40 backdrop-blur border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  Prime Locations
                </h3>
                <p className="text-xs text-muted-foreground">
                  Curated Dubai neighborhoods
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Instant Search
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Real-Time Data
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="animate-scroll-in-right duration-1000 ease-in-out repeat-initial [--offset:50px]">
            <PropertyMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
