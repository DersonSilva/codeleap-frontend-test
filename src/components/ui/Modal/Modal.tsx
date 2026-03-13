type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="
          bg-white 
          w-full        /* Ocupa 100% do container pai */
          max-w-[660px] /* Largura máxima em desktops */
          rounded-[16px] 
          border border-gray-200 
          shadow-lg 
          p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
