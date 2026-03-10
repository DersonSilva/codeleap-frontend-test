type PostCardProps = {
  title: string;
  username: string;
  content: string;
  time: string;
};

export function PostCard({ title, username, content, time }: PostCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>

        <div className="flex gap-2">
          <button>🗑</button>
          <button>✏️</button>
        </div>
      </div>

      <div className="p-4 text-sm">
        <div className="flex justify-between text-gray-500 mb-3">
          <span>@{username}</span>
          <span>{time}</span>
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
}
