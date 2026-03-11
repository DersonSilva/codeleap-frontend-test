type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-[660px] rounded-[16px] border border-gray-200 shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
