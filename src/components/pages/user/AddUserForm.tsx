/**
 * This component handles add user form
 * Calling API call for adding a new user
 */
import {
  addUserPayload,
  addUserValidationSchema,
} from '@/validation/user.validation';
import {zodResolver} from '@hookform/resolvers/zod';
import clsx from 'clsx';
import {useForm} from 'react-hook-form';

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    getValues,
  } = useForm<addUserPayload>({
    mode: 'onSubmit',
    resolver: zodResolver(addUserValidationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  async function handleAddUser(values: addUserPayload) {
    setTimeout(() => {
      reset();
      alert('Form resetting...');
    }, 3000);
  }

  console.log(getValues());
  return (
    <>
      <form
        onSubmit={handleSubmit(handleAddUser)}
        id='add-user-form'
        className='grid gap-6 mb-6 md:grid-cols-2 px-4'
      >
        <div>
          <label
            htmlFor='firstName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            First name
          </label>
          <input
            type='text'
            id='firstName'
            className={clsx('simple-input', {
              'border-red-500 dark:border-red-500': errors.firstName?.message,
              'border-gray-300': !errors.firstName?.message,
            })}
            placeholder='First name'
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className='text-xs text-red-500'>{errors.firstName?.message}</p>
          )}{' '}
        </div>
        <div>
          <label
            htmlFor='lastName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Last name
          </label>
          <input
            type='text'
            id='lastName'
            className={clsx('simple-input', {
              'border-red-500 dark:border-red-500': errors.lastName?.message,
              'border-gray-300': !errors.lastName?.message,
            })}
            placeholder='Last name'
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className='text-xs text-red-500'>{errors.lastName?.message}</p>
          )}{' '}
        </div>
      </form>
      <div className='px-4 flex flex-row-reverse mb-1'>
        <button className='btn-primary' form='add-user-form' type='submit'>
          Add User
        </button>
      </div>
      {getValues() && (
        <p className='px-4 font-light text-base'>
          FormValues: {JSON.stringify(getValues(), null, 2)}
        </p>
      )}
    </>
  );
};

export default AddUserForm;
