import React from "react";

interface AnimatedSectionContentProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

export function AnimatedSectionContent({
  children,
  isActive,
  className = "",
}: AnimatedSectionContentProps) {
  // Animations have been removed per user request for a smoother, zero-delay experience.
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
