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
import { Label } from '@radix-ui/react-label';

/**
 * Login page containing the login form
 */
export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="max-h-[90vh] max-w-[85vw] min-w-[70vw] md:min-w-[50vw] lg:min-w-[30vw]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the media logger
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="enter your email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="enter your password"
              />
            </div>
            <Button
              type="submit"
              onClick={() => {
                /* TODO: implement login */
              }}
            >
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
