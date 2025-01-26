import { keys } from "@/config/queryKeys";
import { getUsers } from "@/service/user.service";
import { User } from "@/types/user.types";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery<User[]>({
    queryKey: [keys.users],
    queryFn: () => getUsers(),
  });
}
