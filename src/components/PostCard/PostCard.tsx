import { useState } from "react";
import { EditSquare, DeleteForever } from "@mui/icons-material";

type PostCardProps = {
  title: string;
  username: string;
  content: string;
  time: string;
  canEdit?: boolean;
  onEdit?: (title: string, content: string) => void;
  onDelete?: () => void;
};

export function PostCard({
  title,
  username,
  content,
  time,
  canEdit = false,
  onEdit,
  onDelete,
}: PostCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
        {isEditing ? (
          <input
            className="rounded p-1 text-black"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        ) : (
          <h3 className="font-bold">{title}</h3>
        )}

        {canEdit && !isEditing && (
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)}>
              <EditSquare />
            </button>
            <button onClick={onDelete}>
              <DeleteForever />
            </button>
          </div>
        )}
      </div>

      <div className="p-4 text-sm flex flex-col gap-2">
        <div className="flex justify-between text-gray-500 mb-3">
          <span>@{username}</span>
          <span>{time}</span>
        </div>

        {isEditing ? (
          <>
            <textarea
              className="border p-1 rounded w-full"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <div className="flex gap-2 mt-2">
              <button
                className="bg-green-500 text-white px-2 rounded"
                onClick={() => {
                  onEdit?.(editTitle, editContent);
                  setIsEditing(false);
                }}
              >
                Save
              </button>
              <button
                className="bg-gray-300 px-2 rounded"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}
