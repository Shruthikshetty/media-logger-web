import Link from 'next/link';

const AppFooter = () => {
  return (
    <div className="bg-card flex w-full flex-col gap-4 rounded-t-lg p-5 md:flex-row md:justify-center md:gap-10">
      <div className="flex flex-col gap-2 md:w-1/3">
        {/* header */}
        <h1 className="text-foreground text-xl font-semibold">Media Logger</h1>
        {/* description */}
        <p className="text-muted-foreground">
          Thank you for using our platform to track your favorite games, movies,
          and TV shows! Made with ❤️ for media enthusiasts
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
        <h2 className="text-foreground text-md mb-1 font-semibold">CONTACT</h2>
        <ul>
          {/* github icon */}
          <li>
            {/* TODO add github icon  , actual link */}
            <Link href="https://github.com/">Github</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppFooter;
