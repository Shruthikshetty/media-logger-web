import Link from 'next/link';
import Image from 'next/image';
import env from '@/env';

const AppFooter = () => {
  return (
    <footer className="bg-card flex w-full flex-col gap-4 rounded-t-lg p-5">
      <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-10">
        <div className="flex flex-col gap-2 md:w-1/3">
          {/* header */}
          <h1 className="text-foreground text-xl font-semibold">
            Media Logger
          </h1>
          {/* description */}
          <p className="text-muted-foreground">
            Thank you for using our platform to track your favorite games,
            movies, and TV shows! Made with ❤️ for media enthusiasts
          </p>
        </div>
        {/* navigation's */}
        <div>
          <h2 className="text-foreground text-md mb-1 font-semibold">
            NAVIGATION
          </h2>
          <ul className="text-muted-foreground">
            <li className="hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            {/* this will be tab switcher @TODO */}
            <li className="hover:text-primary">Games</li>
            <li className="hover:text-primary">Movies</li>
            <li className="hover:text-primary">TV Shows</li>
          </ul>
        </div>
        {/* contact */}
        <div>
          <h2 className="text-foreground text-md mb-2 font-semibold">
            CONTACT
          </h2>
          <ul>
            {/* github icon */}
            <li>
              {/* TODO actual link */}
              <a
                href={env.NEXT_PUBLIC_GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={'/github.svg'} alt={'/'} width={20} height={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* separator */}
      <div className="bg-border h-full w-full border-t" />
      {/* Attributions  */}
      <div>{/* @TODO */}</div>
    </footer>
  );
};

export default AppFooter;
