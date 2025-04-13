"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart, PenTool, QrCode } from "lucide-react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: ReadonlyArray<{
    readonly icon: "creation" | "qrcode" | "stats";
    readonly description: string;
  }>;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "creation":
        return <PenTool className="w-8 h-8 text-orange-600" />;
      case "qrcode":
        return <QrCode className="w-8 h-8 text-blue-600" />;
      case "stats":
        return <BarChart className="w-8 h-8 text-green-600" />;
      default:
        return null;
    }
  };

  const getCardTitle = (iconName: string) => {
    switch (iconName) {
      case "creation":
        return "Création Facile";
      case "qrcode":
        return "Partage Instantané";
      case "stats":
        return "Suivi des Performances";
      default:
        return "";
    }
  };

  const getCardColor = (iconName: string) => {
    switch (iconName) {
      case "creation":
        return "bg-orange-50";
      case "qrcode":
        return "bg-blue-50";
      case "stats":
        return "bg-green-50";
      default:
        return "bg-white";
    }
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full block rounded-3xl",
                  item.icon === "creation" && "bg-orange-100",
                  item.icon === "qrcode" && "bg-blue-100",
                  item.icon === "stats" && "bg-green-100"
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className={getCardColor(item.icon)}>
            <div className="flex flex-col items-center">
              {getIcon(item.icon)}
              <CardTitle>{getCardTitle(item.icon)}</CardTitle>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-200 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "mt-4 text-black font-bold text-lg tracking-wide",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-700 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
