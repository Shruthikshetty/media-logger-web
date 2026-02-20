'use client';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from '../components/theme-switch';
import { Button } from '../components/ui/button';
import { useAuthStore } from '../state-management/auth.store';

// TODO page in dev
/**
 * Home page of the app
 */
export default function Home() {
  const route = useRouter();

  // get user data from auth store
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  console.log(user);

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
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
}
