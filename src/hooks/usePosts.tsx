import { keys } from "@/config/queryKeys";
import { getPosts } from "@/service/post.service";
import { Post } from "@/types/post.types";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: [keys.posts],
    queryFn: () => getPosts(),
  });
}
