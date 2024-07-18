import {useUsers} from '@/hooks/useUsers';
import UserItem from './UserItem';

const UserList = () => {
  const {data: users, isLoading, isError} = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <>
      <h3 className='text-center md:text-left text-1xl md:text-2xl font-bold mb-5'>
        User List
      </h3>{' '}
      <div className='flex flex-wrap gap-2 justify-center'>
        {users?.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UserList;
