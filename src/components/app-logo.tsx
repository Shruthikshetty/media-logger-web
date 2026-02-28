'use client';
import Link from 'next/link';

/**
 * This component is the logo of the app
 * @returns AppLogo component
 */
const AppLogo = () => {
  return (
    <Link href={'/'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 200 200"
        className="h-10 w-10 rounded-lg"
      >
        <defs>
          <linearGradient
            id="logoGradient"
            gradientTransform="rotate(45 0.5 0.5)"
          >
            {/* Using Tailwind-friendly CSS variables */}
            <stop offset="30%" style={{ stopColor: 'var(--color-primary)' }} />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(115, 0, 153 , 0.7)' }}
            />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#logoGradient)" />
        <g transform="matrix(6.9048,0,0,6.9048,39.58,149.09)">
          <path
            d="M1.07-14.22L5.58-14.22L8.75-4.33L11.91-14.22L16.43-14.22L16.43 0L12.99 0L12.99-3.32L13.32-10.12L9.88 0L7.62 0L4.17-10.13L4.50-3.32L4.50 0L1.07 0L1.07-14.22Z"
            className="fill-white transition-colors duration-300 dark:fill-white"
          />
        </g>
      </svg>
    </Link>
  );
};

export default AppLogo;
