type Props = {
  children: React.ReactNode;
};

export function Modal({ children }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded p-6 w-[500px]">{children}</div>
    </div>
  );
}
