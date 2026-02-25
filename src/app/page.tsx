'use client';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from '../components/theme-switch';
import { Button } from '../components/ui/button';
import { useAuthStore } from '../state-management/auth.store';
import { useGetUserDetails } from '../services/user-service';

// TODO page in dev
/**
 * Home page of the app
 */
export default function Home() {
  const route = useRouter();
  // get user data from auth store
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // fetch user details
  const { data: userDetails } = useGetUserDetails();

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 text-center">
      <p>HOME PAGE</p>
      <p className="text-primary text-2xl">switch themes</p>
      <div className="flex items-center justify-center">
        <ThemeSwitcher />
      </div>
      {!isLoggedIn ? (
        <Button variant="default" onClick={() => route.push('/login')}>
          Login
        </Button>
      ) : (
        <div className="text-fo">
          <h1 className="mb-2 text-xl font-bold">Welcome</h1>
          <p>{userDetails?.data?.name}</p>
          <p>{userDetails?.data?.email}</p>
        </div>
      )}
    </div>
  );
}
