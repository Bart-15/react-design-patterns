'use client';

import AddUserForm from './AddUserForm';
import UserList from './UserList';

const UserContainer = () => {
  return (
    <div className='px-4'>
      <h3 className='text-center md:text-left text-1xl md:text-2xl font-bold mb-5'>
        Single Responsibility Principle
      </h3>{' '}
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default UserContainer;
