"use client";
import { cn } from "@workspace/ui/lib/utils";
import {
  Search,
  Home,
  Zap,
  MessageSquare,
  User,
  TrendingUp,
  Heart,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, Variants } from "motion/react";

interface CapabilityType {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const capabilities: Array<CapabilityType> = [
  {
    Icon: Search,
    title: "Smart Area Search",
    description:
      "Search and discover available areas across Dubai with detailed neighborhood insights and local information.",
    color: "from-primary/20 to-primary/5",
  },
  {
    Icon: Home,
    title: "Property Details",
    description:
      "Get comprehensive property information including specifications, amenities, pricing, and availability status.",
    color: "from-accent/20 to-accent/5",
  },
  {
    Icon: Zap,
    title: "Smart Comparison",
    description:
      "Compare multiple properties side-by-side with AI-powered analysis to find your best match.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    Icon: MessageSquare,
    title: "Create Inquiry",
    description:
      "Instantly create and submit property inquiries. Connect directly with agents for more details.",
    color: "from-primary/20 to-primary/5",
  },
  {
    Icon: User,
    title: "Agent Details",
    description:
      "Meet experienced real estate professionals with verified credentials and client testimonials.",
    color: "from-accent/20 to-accent/5",
  },
  {
    Icon: TrendingUp,
    title: "Market Statistics",
    description:
      "Access real-time market trends, price analytics, and investment opportunities with data-driven insights.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    Icon: Heart,
    title: "Save Properties",
    description:
      "Create and manage your favorites list. Build your personalized portfolio of dream properties.",
    color: "from-primary/20 to-primary/5",
  },
  {
    Icon: BookOpen,
    title: "Advanced Search",
    description:
      "Filter by area, bedrooms, price range, property type, and status for precise results.",
    color: "from-accent/20 to-accent/5",
  },
];

export default function CapabilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="capabilities" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful AI Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Our intelligent agent is equipped with cutting-edge features to
            revolutionize your property search experience in Dubai.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
        >
          {capabilities.map((capability, index) => (
            <CapabilityItem
              key={index}
              {...capability}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Experience all these capabilities with a single chat interface
            powered by intelligent AI.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold cursor-pointer">
            <span>✨ Try it now in the chat</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CapabilityItemProps = CapabilityType & {
  variants: Variants;
};

function CapabilityItem({
  color,
  Icon,
  title,
  description,
  variants,
}: CapabilityItemProps) {
  return (
    <motion.div
      variants={variants}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-background/50 border border-border rounded-xl p-6 hover:border-primary/50 duration-300 ease-in-out transition-all hover:shadow-lg group hover:-translate-y-1"
    >
      <div
        className={cn(
          "size-12 rounded-lg bg-linear-to-br flex items-center justify-center mb-4 duration-300 ease-in-out group-hover:scale-110 transition-transform",
          color,
        )}
      >
        <Icon className="size-6 text-primary" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      <div className="w-0 group-hover:w-full h-0.5 bg-linear-to-r from-primary to-accent mt-4 transition-all duration-500 ease-out" />
    </motion.div>
  );
}
