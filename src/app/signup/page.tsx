'use client';
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import {
  FieldError,
  FieldGroup,
  FieldLabel,
  Field,
} from '@/src/components/ui/field';
import { Input } from '@/src/components/ui/input';
import { successToast } from '@/src/lib/toast-wrapper';
import { signupDefaultValues, signupSchema } from '@/src/schema/signup-schema';
import { useCreateUser } from '@/src/services/user-service';
import { useForm } from '@tanstack/react-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * Sign up page containing the sign up form
 * @returns {JSX.Element}
 */
export default function SignUp() {
  // hook to sign up
  const { mutate } = useCreateUser();
  // hook for navigation
  const route = useRouter();
  // create a sign up form
  const form = useForm({
    defaultValues: signupDefaultValues,
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: async ({ value }) => {
      mutate(value, {
        onSuccess: (data) => {
          successToast(data?.message ?? 'User created successfully');
          form.reset();
          route.replace('/login');
        },
      });
    },
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="border-muted-foreground max-h-[90vh] max-w-[85vw] min-w-[70vw] md:min-w-[50vw] lg:min-w-[30vw]">
        <CardHeader>
          {/* back to login  */}
          <Link
            href="/login"
            className="text-muted-foreground flex items-center gap-1 text-lg"
          >
            <ArrowLeft className="size-4" />
            Back to Login
          </Link>

          <CardTitle className="text-center text-2xl font-bold">
            Create Account
          </CardTitle>
          <CardDescription className="text-center">
            Sign up to start tracking your media
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* form for name and email*/}
          <form
            id="signup-form"
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup className="flex flex-col gap-4">
              <form.Field name="name">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ''}
                        onBlur={field.handleBlur}
                        placeholder="enter your name"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
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
                        onBlur={field.handleBlur}
                        placeholder="example@gamil.com"
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
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ''}
                        type="password"
                        onBlur={field.handleBlur}
                        placeholder="****"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
              <form.Field name="confirmPassword">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Confirm Password
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ''}
                        type="password"
                        onBlur={field.handleBlur}
                        placeholder="****"
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
            <Button
              type="submit"
              aria-label="sign up"
              // disabled={isPending}
              className="cursor-pointer"
            >
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
