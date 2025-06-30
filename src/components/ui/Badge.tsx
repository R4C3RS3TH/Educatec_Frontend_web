import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "success" | "danger";
}

const badgeStyles = {
  default: "bg-blue-100 text-blue-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  danger: "bg-red-100 text-red-800",
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default" }) => {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${badgeStyles[variant]}`}
    >
      {children}
    </span>
  );
};
