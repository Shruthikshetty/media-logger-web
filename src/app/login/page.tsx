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
import {
  loginDefaultValues,
  loginSchema,
  LoginSchema,
} from '@/src/schema/login-schema';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/src/components/ui/field';
/**
 * Login page containing the login form
 */
export default function Login() {
  // create a login form using the login schema using react form hook
  const { handleSubmit, control } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });

  //handle login form submit
  const handleLoginSubmit = (data: LoginSchema) => {
    console.log(data);
  };

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
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
            <FieldGroup>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      id="email"
                      placeholder="enter your email"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      placeholder="enter your password"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <Button type="submit" aria-label="sign-in">
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
