type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: Props) {
  return <textarea className="border rounded px-3 py-2 w-full" {...props} />;
}
