import { useState } from "react";
import { Input } from "../ui/Input/Input";
import { Textarea } from "../ui/Textarea/Textarea";
import { Button } from "../ui/Button/Button";

type Props = {
  onCreate: (title: string, content: string) => void;
};

export function CreatePost({ onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const disabled = !title.trim() || !content.trim();

  function handleCreate() {
    if (disabled) return;
    onCreate(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <div
      className="bg-white p-6 rounded-lg border border-border mx-auto
                 w-full max-w-[752px] h-[334px] flex flex-col justify-between"
    >
      <h2 className="text-[22px] font-[700] mb-4 text-center sm:text-left">
        What's on your mind?
      </h2>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-[16px] font-[400] block mb-1">Title</label>
          <Input
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-[32px] rounded-[8px] border border-border px-3 placeholder:text-[14px] placeholder:font-normal"
          />
        </div>

        <div>
          <label className="text-[16px] font-[400]block mb-1">Content</label>
          <Textarea
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[74px] rounded-[8px] border border-border px-3 py-2 placeholder:text-[14px] placeholder:font-normal"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="brand"
          className="w-[120px] h-[32px] text-[16px] font-[700] rounded-[8px]"
          disabled={disabled}
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
    </div>
  );
}
