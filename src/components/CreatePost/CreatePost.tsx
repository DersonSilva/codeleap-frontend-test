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
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-lg font-bold mb-4">What's on your mind?</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm block mb-1">Title</label>
          <Input
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm block mb-1">Content</label>
          <Textarea
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <Button
            variant="brand"
            size="sm"
            disabled={disabled}
            onClick={handleCreate}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
