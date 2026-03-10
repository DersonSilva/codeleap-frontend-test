type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        px-6 py-2 rounded text-white font-medium
        ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
