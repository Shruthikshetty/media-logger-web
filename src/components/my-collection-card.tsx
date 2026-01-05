import { ArrowRight, Library } from 'lucide-react';
import { Card, CardContent, CardTitle } from './ui/card';
import Link from 'next/link';
import { JSX } from 'react';
import { cn } from '../lib/utils';

export type MyCollectionCardProps = {
  href: string;
  customStyles?: string;
};

/**
 * A component that displays a card for a user's collection.
 * It will navigate to to provided href when clicked.
 * intended for navigating user to user collection view page
 * @param {MyCollectionCardProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element for the component.
 */
const MyCollectionCard = ({
  href = '/',
  customStyles,
}: MyCollectionCardProps): JSX.Element => {
  return (
    <Link href={href} className="w-full">
      <Card
        className={cn(
          'from-primary/20 to-primary/10 border-primary/40 group hover:from-primary/30 rounded-lg bg-linear-to-r',
          customStyles,
        )}
      >
        <CardContent className="flex flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center gap-5">
            <div className="bg-primary/30 rounded-xl p-3">
              <Library className="text-primary size-6" />
            </div>
            <div>
              <CardTitle className="text-foreground text-left text-lg">
                My Collection
              </CardTitle>
              <p className="text-muted-foreground text-base">
                Advanced list view with sorting, filtering & export
              </p>
            </div>
          </div>
          <ArrowRight className="text-primary size-6 transition-transform group-hover:translate-x-1" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default MyCollectionCard;
