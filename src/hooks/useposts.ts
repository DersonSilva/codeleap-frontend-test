import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../services/Api";

export type Post = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export function usePosts() {
  const queryClient = useQueryClient();

  const query = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await API.get("");

      return res.data.results.sort(
        (a: Post, b: Post) =>
          new Date(b.created_datetime).getTime() -
          new Date(a.created_datetime).getTime(),
      );
    },
    staleTime: 0,
  });

  // CREATE post
  const createPost = useMutation({
    mutationFn: (newPost: {
      username: string;
      title: string;
      content: string;
    }) => API.post("/", newPost),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  // UPDATE post
  const updatePost = useMutation({
    mutationFn: ({
      id,
      title,
      content,
    }: {
      id: number;
      title: string;
      content: string;
    }) => API.patch(`/${id}/`, { title, content }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  // DELETE post
  const deletePost = useMutation({
    mutationFn: (id: number) => API.delete(`/${id}/`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return {
    posts: query.data || [],
    isLoading: query.isLoading,
    refetch: query.refetch,
    createPost,
    updatePost,
    deletePost,
  };
}
