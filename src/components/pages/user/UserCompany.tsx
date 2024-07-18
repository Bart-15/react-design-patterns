import type {UserCompany} from '@/types/user.types';

type UserCompanyProps = {} & UserCompany;

const UserCompany = ({company}: UserCompanyProps) => {
  return (
    <>
      <p className='font-bold'>Company:</p>
      <p className='text-sm font-light'>{company.name}</p>
    </>
  );
};

export default UserCompany;
