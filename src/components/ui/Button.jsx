import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  withArrow = true,
  className = "",
  href,
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95";
  const variants = {
    primary: "bg-brand-700 text-white hover:bg-brand-800",
    light: "bg-white text-brand-800 hover:bg-cream-100",
    outline: "border border-white/30 text-white hover:bg-white/10",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
