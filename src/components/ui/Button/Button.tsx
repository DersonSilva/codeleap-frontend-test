type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "danger" | "brand";
  size?: "sm" | "md" | "lg";
};

export function Button({
  children,
  disabled,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary:
      "border border-black text-black bg-transparent hover:bg-gray-100",
    success: "bg-[#47B960] text-white hover:opacity-90",
    danger: "bg-red-500 text-white hover:bg-red-600",
    brand: "bg-[#7695EC] text-white hover:bg-[#5f7ee6]",
  };

  const sizes = {
    sm: "w-[120px] h-[32px] text-sm rounded-[8px]",
    md: "px-6 py-2 rounded",
    lg: "px-8 py-3 rounded-lg",
  };

  return (
    <button
      disabled={disabled}
      className={`
        font-medium flex items-center justify-center
        transition-colors duration-200
        ${sizes[size]}
        ${disabled ? "bg-gray-300 cursor-not-allowed" : variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
