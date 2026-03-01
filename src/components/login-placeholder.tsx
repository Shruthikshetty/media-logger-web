import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { useAuthStore } from '../state-management/auth.store';
import { cn } from '../lib/utils';

/**
 * this component is shown when the user is not logged in
 * used to block content that requires authentication
 * @returns LoginPlaceholder component
 */
const LoginPlaceholder = ({
  message = 'Please login to access this content',
  children,
  className,
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  // get user data from auth store
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // if user has logged in and a custom content is provided show that
  if (isLoggedIn && children) {
    return <>{children}</>;
  }

  // if user has logged in and no custom content is provided show nothing
  if (isLoggedIn) {
    return null;
  }

  // if user is not logged in show a card with a message and a login button
  return (
    <Card className={cn('border-border', className)}>
      <CardHeader>
        <CardTitle>Login Required</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="default"
          onClick={() => {
            router.push('/login');
          }}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginPlaceholder;
