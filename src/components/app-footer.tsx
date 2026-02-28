import Link from 'next/link';
import Image from 'next/image';
import {
  APP_FOOTER_ATTRIBUTES,
  APP_FOOTER_CONTACTS,
  APP_FOOTER_NAVIGATES,
} from '@/src/constants/screen.constants';

/**
 * This component is the footer of the app
 * @returns AppFooter component
 */
const AppFooter = () => {
  return (
    <footer className="bg-card flex w-full flex-col gap-4 rounded-t-lg p-5">
      <div className="flex flex-col gap-4 md:max-w-[75%] md:flex-row md:justify-between md:self-center">
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
            {APP_FOOTER_NAVIGATES.map((navigate) => (
              <li className="hover:text-primary" key={navigate.title}>
                <Link href={navigate.href}>{navigate.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* contact */}
        <div>
          <h2 className="text-foreground text-md mb-2 font-semibold">
            CONTACT
          </h2>
          <ul>
            {/* list of contact links*/}
            {APP_FOOTER_CONTACTS.map((contact) => (
              <li key={contact.title}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={contact.svg}
                    alt={contact.title}
                    width={20}
                    height={20}
                  />
                  <span className="sr-only">{contact.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* separator */}
      <div className="bg-border h-full w-full border-t" />
      {/* Attributions  */}
      <div>
        <p className="text-muted-foreground mb-2 text-center text-xs">
          This product uses data and images from <b>TMDB</b>, <b>IGDB</b>, and{' '}
          <b>RAWG</b>. We are not endorsed or certified by these providers.
          Logos are trademarks of their respective owners.
        </p>
        <div className="flex items-center justify-center gap-2">
          {APP_FOOTER_ATTRIBUTES.map((attribute) => (
            <a
              href={attribute.href}
              target="_blank"
              rel="noopener noreferrer"
              key={attribute.title}
            >
              <Image
                src={attribute.svg}
                alt={attribute.title}
                width={40}
                height={40}
                className="hover:cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
