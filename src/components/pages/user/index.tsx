'use client';
import AddUserForm from './AddUserForm';

const UserContainer = () => {
  return (
    <>
      <h3 className='text-center md:text-left text-1xl md:text-2xl font-bold mb-5 px-4'>
        Single Responsibility Principle
      </h3>{' '}
      <AddUserForm />
    </>
  );
};

export default UserContainer;
