import z from 'zod';
import { REGEX } from '../constants/pattern.constants';

//this contains the zod schema for the login form
export const signupSchema = z
  .object({
    name: z
      .string({
        error: 'Name must be string',
      })
      .min(1, 'Name is required'),
    email: z
      .string({
        error: 'Email must be string',
      })
      .min(1, 'Email is required')
      .regex(REGEX.email, 'Email is not valid'),

    password: z
      .string({
        error: 'Password must be string',
      })
      .min(1, 'Password is required'),
    confirmPassword: z
      .string({
        error: 'Confirm Password must be string',
      })
      .min(1, 'Confirm Password is required'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

//default values for the login form
export const signupDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

//this is the type for the login form
export type LoginSchema = z.infer<typeof signupSchema>;
