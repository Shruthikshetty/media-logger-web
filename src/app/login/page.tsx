'use client';

import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { loginDefaultValues, loginSchema } from '@/src/schema/login-schema';
import { useForm } from '@tanstack/react-form';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/src/components/ui/field';
import { useLoginUser } from '@/src/services/auth-service';
import { useRouter } from 'next/navigation';
import { successToast } from '@/src/lib/toast-wrapper';
import { useAuthStore } from '@/src/state-management/auth.store';
import Cookies from 'js-cookie';
import { COOKIE_EXPIRY, COOKIE_NAMES } from '@/src/constants/config.constants';
import { useScreenLoader } from '@/src/state-management/screen-loader.store';

/**
 * Login page containing the login form
 */
export default function Login() {
  // get setters from screen loader store
  const setLoader = useScreenLoader((state) => state.setLoader);

  // get setters from auth store
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  // route for navigation
  const route = useRouter();

  // login mutation hook
  const { mutate, isPending, error } = useLoginUser();

  // create a login form
  const form = useForm({
    defaultValues: loginDefaultValues,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      // set loading true
      setLoader(true);
      mutate(value, {
        onSuccess: (res) => {
          // set token in cookie
          Cookies.set(COOKIE_NAMES.token, res?.data?.token, {
            expires: COOKIE_EXPIRY.token,
            path: '/', // accessible across the app
            secure: true,
          });
          // set user in store
          setIsLoggedIn(true);
          setUser(res.data.user);
          // navigate to home page
          successToast('Login success');
          route.replace('/');
        },
        onSettled: () => {
          // set loading false
          setLoader(false);
        },
      });
    },
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="border-muted-foreground max-h-[90vh] max-w-[85vw] min-w-[70vw] md:min-w-[50vw] lg:min-w-[30vw]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the media logger
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="login-form"
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup className="flex flex-col gap-4">
              <form.Field name="email">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ''}
                        type="email"
                        onBlur={field.handleBlur}
                        placeholder="enter your email"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
              <form.Field name="password">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <div className="flex items-center justify-between">
                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                        {/* TODO this functionality will be implemented later */}
                        <Button
                          variant="link"
                          className="p-0 font-normal"
                          type="button"
                          aria-label="forgot password"
                        >
                          forgot password
                        </Button>
                      </div>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ''}
                        type="password"
                        onBlur={field.handleBlur}
                        placeholder="enter your password"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
            </FieldGroup>
            {error?.response?.data?.message ? (
              <p className="text-center text-sm text-red-500">
                {error.response.data.message}
              </p>
            ) : null}
            <Button
              type="submit"
              aria-label="sign in"
              disabled={isPending}
              className="cursor-pointer"
            >
              Sign in
            </Button>
          </form>
          <div className="mt-2 flex items-center justify-center gap-1 text-sm">
            <p>Don&apos;t have an account?</p>
            {/* TODO this functionality will be implemented later */}
            <Button
              variant="link"
              className="p-0"
              type="button"
              aria-label="sign up"
              onClick={() => route.push('/signup')}
            >
              Create Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
