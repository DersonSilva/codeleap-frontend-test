type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: Props) {
  return <input className="border rounded px-3 py-2 w-full" {...props} />;
}
