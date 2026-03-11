import { Header } from "../../components/Header/Header";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { PostCard } from "../../components/PostCard/PostCard";
import { Modal } from "../../components/ui/Modal/Modal";
import { Input } from "../../components/ui/Input/Input";
import { Textarea } from "../../components/ui/Textarea/Textarea";
import { Button } from "../../components/ui/Button/Button";
import type { Post } from "../../hooks/useposts";
import { useToast } from "../../hooks/useToast";
import { usePosts } from "../../hooks/useposts";
import { useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { Skeleton } from "../../components/ui/Skeleton/Skeleton";

export default function Feed() {
  const { posts, isLoading, createPost, updatePost, deletePost } = usePosts();
  const { showToast } = useToast();

  const [username] = useState(localStorage.getItem("username") || "");

  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deletingPost, setDeletingPost] = useState<Post | null>(null);

  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  function openEditModal(post: Post) {
    setEditingPost(post);
    setEditTitle(post.title);
    setEditContent(post.content);
  }

  function closeEditModal() {
    setEditingPost(null);
  }

  async function handleSaveEdit() {
    if (!editingPost) return;

    try {
      await updatePost.mutateAsync({
        id: editingPost.id,
        title: editTitle,
        content: editContent,
      });

      showToast("Post updated!", "success");
      setEditingPost(null);
    } catch {
      showToast("Error updating post", "error");
    }
  }

  function openDeleteModal(post: Post) {
    setDeletingPost(post);
  }

  function closeDeleteModal() {
    setDeletingPost(null);
  }

  async function handleConfirmDelete() {
    if (!deletingPost) return;

    try {
      await deletePost.mutateAsync(deletingPost.id);
      showToast("Post deleted!", "success");
      setDeletingPost(null);
    } catch {
      showToast("Error deleting post", "error");
    }
  }

  if (isLoading)
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center py-10">
        <div className="w-[800px] bg-white rounded-lg p-6 flex flex-col gap-4">
          <Skeleton width="30%" height="1.5rem" />
          <Skeleton width="50%" height="1.2rem" />
          <Skeleton width="100%" height="6rem" rounded />
          <Skeleton width="100%" height="6rem" rounded />
          <Skeleton width="100%" height="6rem" rounded />
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-[800px] bg-white  shadow-sm overflow-hidden">
        <Header />
        <main className="p-6 flex flex-col gap-6">
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
              time={formatDistanceToNow(parseISO(post.created_datetime), {
                addSuffix: true,
              })}
              canEdit={post.username === username}
              onEdit={() => openEditModal(post)}
              onDelete={() => openDeleteModal(post)}
            />
          ))}
        </main>
      </div>

      {editingPost && (
        <Modal onClose={closeEditModal}>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Edit item</h2>

            <div>
              <label className="text-sm block mb-1">Title</label>
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Content</label>
              <Textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="secondary" size="sm" onClick={closeEditModal}>
                Cancel
              </Button>

              <Button variant="success" size="sm" onClick={handleSaveEdit}>
                Save
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {deletingPost && (
        <Modal onClose={closeDeleteModal}>
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">
              Are you sure you want to delete this item?
            </h2>

            <div className="flex justify-end gap-3">
              <Button variant="secondary" size="sm" onClick={closeDeleteModal}>
                Cancel
              </Button>

              <Button variant="danger" size="sm" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
