'use client';
import MyCollectionCard from '../components/my-collection-card';
import { ThemeSwitcher } from '../components/theme-switch';
import { Button } from '../components/ui/button';

/**
 * Home page of the app
 */
export default function Home() {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 text-center">
      <p>HOME PAGE</p>
      <p className="text-primary text-2xl">switch themes</p>
      <div className="flex items-center justify-center">
        <ThemeSwitcher />
      </div>
      <Button>Button</Button>
      <MyCollectionCard />
    </div>
  );
}
