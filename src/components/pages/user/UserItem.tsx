import {User} from '@/types/user.types';
import UserAddress from './UserAddress';
import UserCompany from './UserCompany';

type UserItemProps = {
  user: User;
};

const UserItem = ({user}: UserItemProps) => {
  return (
    <div className='relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96'>
      <div className='p-6'>
        <h5 className='block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
          {user.name}
        </h5>
        <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit mb-2'>
          {user.email}
        </p>
        <UserAddress address={user.address} />
        <UserCompany company={user.company} />
      </div>
      <div className='p-6 pt-0'>
        <button
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          type='button'
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserItem;
