import {usePosts} from '@/hooks/usePosts';
import PostCard from './PostCard';

const PostList = () => {
  const {data: posts, isLoading, isError} = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <>
      <h3 className='text-center md:text-left text-1xl md:text-2xl font-bold mb-5 px-5'>
        Compound Components
      </h3>
      <div className='flex flex-wrap gap-2 justify-center'>
        {posts?.map((post) => (
          <PostCard key={post.id} post={post}>
            <PostCard.Title />
            <PostCard.Body />
            <PostCard.Actions />
          </PostCard>
        ))}
      </div>
    </>
  );
};

export default PostList;
