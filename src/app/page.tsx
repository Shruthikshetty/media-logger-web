'use client';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from '../components/theme-switch';
import { Button } from '../components/ui/button';

// TODO page in dev
/**
 * Home page of the app
 */
export default function Home() {
  const route = useRouter();
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 text-center">
      <p>HOME PAGE</p>
      <p className="text-primary text-2xl">switch themes</p>
      <div className="flex items-center justify-center">
        <ThemeSwitcher />
      </div>
      <Button>Button</Button>
      <Button variant="default" onClick={() => route.push('/login')}>
        Login
      </Button>
    </div>
  );
}
