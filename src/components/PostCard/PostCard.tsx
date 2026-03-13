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
    <div className="rounded-lg overflow-hidden  border border-border bg-white">
      <div className="bg-brand text-white px-4 py-3 flex justify-between items-center">
        <h3 className="text-[22px] font-[700]">{title}</h3>

        {canEdit && (
          <div className="flex gap-4">
            <button onClick={onDelete}>
              <DeleteForever />
            </button>
            <button onClick={onEdit}>
              <EditSquare />
            </button>
          </div>
        )}
      </div>

      <div className="p-4 text-sm flex flex-col gap-2">
        <div className="flex justify-between text-border text-[18px] font-[700] mb-3">
          <span>@{username}</span>
          <span>{time}</span>
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
}
