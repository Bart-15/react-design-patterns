import {Post} from '@/types/post.types';
import {createContext, ReactNode, useContext} from 'react';

type PostItemProps = {
  post: Post;
  children: ReactNode;
};

type PostItemContextType = {
  post: Post;
};

const PostItemContext = createContext<PostItemContextType | undefined>(
  undefined
);

const usePostItemContext = () => {
  const context = useContext(PostItemContext);
  if (!context) {
    throw new Error(
      'PostItem components must be used within a PostItem provider'
    );
  }
  return context;
};

const PostCard = ({post, children}: PostItemProps) => {
  return (
    <PostItemContext.Provider value={{post}}>
      <div className='flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-3 text-white justify-between'>
        {children}
      </div>
    </PostItemContext.Provider>
  );
};

PostCard.Title = function PostCardTitle() {
  const {post} = usePostItemContext();
  return <h2 className='text-lg font-semibold'>{post.title}</h2>;
};

PostCard.Body = function PostCardBody() {
  const {post} = usePostItemContext();
  return <p>{post.body}</p>;
};

PostCard.Actions = function PostCardActions() {
  return (
    <div className='flex gap-1'>
      <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>
        Like
      </button>
      <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>
        Read more
      </button>
    </div>
  );
};

export default PostCard;
