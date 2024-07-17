import {object, string, TypeOf} from 'zod';

export const addUserValidationSchema = object({
  firstName: string().min(1, {message: 'First name is required'}),
  lastName: string().min(1, {message: 'Last name is required'}),
});

export type addUserPayload = TypeOf<typeof addUserValidationSchema>;
