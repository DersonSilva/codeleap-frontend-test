import { Header } from "../../components/Header/Header";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { PostCard } from "../../components/PostCard/PostCard";

export default function Feed() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-2xl mx-auto p-6 flex flex-col gap-6">
        <CreatePost />

        <PostCard
          title="My First Post at CodeLeap Network!"
          username="Victor"
          time="25 minutes ago"
          content="Curabitur suscipit suscipit tellus..."
        />

        <PostCard
          title="My Second Post at CodeLeap Network!"
          username="Vini"
          time="45 minutes ago"
          content="Curabitur suscipit suscipit tellus..."
        />
      </main>
    </div>
  );
}
