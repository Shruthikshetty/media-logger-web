import z from 'zod';
import { REGEX } from '../constants/pattern.constants';

//this contains the zod schema for the signup form
export const signupSchema = z
  .object({
    name: z
      .string({
        error: 'Name must be string',
      })
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters'),
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
      .min(3, 'Password must be at least 3 characters')
      .max(50, 'Password must be less than 50 characters'),
    confirmPassword: z
      .string({
        error: 'Confirm Password must be string',
      })
      .min(3, 'Password must be at least 3 characters')
      .max(50, 'Password must be less than 50 characters'),
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

//default values for the sign up form
export const signupDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

//this is the type for the signup form
export type SignupSchema = z.infer<typeof signupSchema>;
