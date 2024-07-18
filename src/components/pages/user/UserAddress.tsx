import type {UserAddress} from '@/types/user.types';

type UserAddressProps = {} & UserAddress;

const UserAddress = ({address}: UserAddressProps) => {
  return (
    <>
      <p className='font-bold'>Address:</p>
      <p className='text-sm font-light'>
        {address.suite}, {address.street}, {address.city}
      </p>
    </>
  );
};

export default UserAddress;
