import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#C74200] text-white hover:bg-[#9E3500] focus-visible:ring-[#C74200]",
  outline: "border-2 border-[#C74200] text-[#C74200] hover:bg-[#C74200] hover:text-white focus-visible:ring-[#C74200]",
  ghost:   "text-white hover:bg-white/10 focus-visible:ring-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const base = [
    "inline-flex items-center justify-center font-semibold tracking-wide",
    "rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
