'use client';
import DemoComponent from '../components/demo-component';
import { ThemeSwitcher } from '../components/theme-switch';

/**
 * Home page of the app
 */
export default function Home() {
  return (
    <div className="m-auto h-screen flex-1 items-center justify-center text-center">
      <p>HOME PAGE</p>
      <DemoComponent header={'Header example'} onClick={() => {}} />
      <p>switch themes</p>
      <ThemeSwitcher />
    </div>
  );
}
