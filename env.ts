// this file allows to access the envs in a type safe way
import { z } from 'zod';

// create a env schema
const EnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.url(),
  NEXT_PUBLIC_GITHUB_LINK: z.url(),
});

// infer the env type
type ENV = z.infer<typeof EnvSchema>;

let tempEnv: ENV;

try {
  tempEnv = EnvSchema.parse({
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_GITHUB_LINK: process.env.NEXT_PUBLIC_GITHUB_LINK,
  });
} catch (err) {
  const error = err as z.ZodError;
  console.error('Invalid environment variables: ', z.flattenError(error));
  // throw error
  throw new Error('Invalid environment variables');
}

const env = tempEnv;

//export type save env
export default env;
