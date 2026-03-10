import { Header } from "../../components/Header/Header";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { PostCard } from "../../components/PostCard/PostCard";
import { usePosts } from "../../hooks/useposts";
import { useToast } from "../../hooks/UseToast";
import { useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function Feed() {
  const { posts, isLoading, createPost, updatePost, deletePost } = usePosts();
  const { showToast } = useToast();
  const [username] = useState(localStorage.getItem("username") || "");

  if (isLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-2xl mx-auto p-6 flex flex-col gap-6">
        <CreatePost
          onCreate={async (title, content) => {
            try {
              await createPost.mutateAsync({ username, title, content });
              showToast("Post created!", "success");
            } catch {
              showToast("Error creating post", "error");
            }
          }}
        />

        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            username={post.username}
            content={post.content}
            // Aqui já calcula e mostra "25 minutes ago"
            time={formatDistanceToNow(parseISO(post.created_datetime), {
              addSuffix: true,
            })}
            canEdit={post.username === username}
            onEdit={async (title, content) => {
              await updatePost.mutateAsync({ id: post.id, title, content });
              showToast("Post updated!", "success");
            }}
            onDelete={async () => {
              await deletePost.mutateAsync(post.id);
              showToast("Post deleted!", "success");
            }}
          />
        ))}
      </main>
    </div>
  );
}
