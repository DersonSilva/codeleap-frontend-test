import { EditSquare, DeleteForever } from "@mui/icons-material";

type PostCardProps = {
  title: string;
  username: string;
  content: string;
  time: string;
  canEdit?: boolean;
  onEdit?: () => void;
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
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="bg-brand text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>

        {canEdit && (
          <div className="flex gap-2">
            <button onClick={onEdit}>
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

        <p>{content}</p>
      </div>
    </div>
  );
}
