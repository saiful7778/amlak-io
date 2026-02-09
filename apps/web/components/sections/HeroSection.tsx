"use client";

import { motion, Variants, useReducedMotion } from "motion/react";
import { Sparkles, Search, MapPin } from "lucide-react";
import { AnimatedGradientText } from "@workspace/ui/components/animated-gradient-text";
import { InteractiveHoverButton } from "@workspace/ui/components/interactive-hover-button";
import { Button } from "@workspace/ui/components/button";
import { GridPattern } from "@workspace/ui/components/grid-pattern";
import GradientBlob from "../GradientBlob";
import PropertyMarquee from "../PropertyMarquee";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const heroContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="bg-linear-to-l from-background via-background to-muted/30 relative overflow-hidden"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Column */}
          <motion.div variants={heroContainer} className="space-y-8">
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-muted/50 border border-primary/30 rounded-full py-1 px-2 hover:border-primary/60 transition-all">
                <Sparkles className="size-4 text-primary animate-pulse-glow" />
                <span className="h-4 w-px bg-neutral-500" />
                <AnimatedGradientText className="text-sm font-medium">
                  Powered by Advanced AI
                </AnimatedGradientText>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              Your Intelligent Real Estate{" "}
              <AnimatedGradientText>Assistant</AnimatedGradientText>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light text-balance"
            >
              Discover, compare, and invest in Dubai&apos;s finest properties
              with an AI agent that understands your needs. Powered by
              cutting-edge artificial intelligence for smarter property search.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <InteractiveHoverButton size="lg" className="h-12">
                  Start Chat with AI Agent
                </InteractiveHoverButton>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button size="lg" variant="outline" className="h-12 px-6">
                  <Search className="w-5 h-5" />
                  Browse Properties
                </Button>
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card/40 backdrop-blur border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  Smart Search
                </h3>
                <p className="text-xs text-muted-foreground">
                  Advanced filters and AI recommendations
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card/40 backdrop-blur border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  Prime Locations
                </h3>
                <p className="text-xs text-muted-foreground">
                  Curated Dubai neighborhoods
                </p>
              </motion.div>
            </motion.div>

            {/* Trust */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 text-xs text-muted-foreground border-t border-border pt-6"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Instant Search
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Real-Time Data
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeLeft} className="relative">
            <PropertyMarquee />
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GradientBlob className="-top-40 -right-40" />
        <GradientBlob className="top-1/2 -translate-y-1/2 -right-40" />
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
        strokeDasharray="4 2"
        className="mask-[radial-gradient(400px_circle_at_center,var(--primary),transparent)] inset-0 skew-y-12"
      />
    </motion.section>
  );
}
