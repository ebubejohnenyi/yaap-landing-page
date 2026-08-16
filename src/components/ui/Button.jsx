import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  withArrow = true,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-brand-700 text-white hover:bg-brand-800",
    light: "bg-white text-brand-800 hover:bg-cream-100",
    outline: "border border-white/30 text-white hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
    </button>
  );
}
