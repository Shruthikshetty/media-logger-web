'use client';
import { ThemeSwitcher } from '../components/theme-switch';
import { Button } from '../components/ui/button';

/**
 * Home page of the app
 */
export default function Home() {
  return (
    <div className="m-auto h-screen flex-1 items-center justify-center text-center">
      <p>HOME PAGE</p>
      <p className='text-2xl text-primary'>switch themes</p>
      <ThemeSwitcher />
      <Button>Button</Button>
    </div>
  );
}
