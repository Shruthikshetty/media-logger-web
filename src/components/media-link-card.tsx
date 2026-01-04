import { JSX } from 'react';
import { Card, CardContent, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type MediaLinkCardProps = {
  href: string;
  title: string;
  description: string;
};

/**
 * A component that displays a media link card with a title, description, and an arrow to the right.
 * It is a card with a content section that contains the title and description.
 * The content section also contains an arrow to the right.
 * It is a next Link component that wraps the card.
 * @param {MediaLinkCardProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element for the component.
 */
const MediaLinkCard = ({
  href = '/',
  title,
  description,
}: MediaLinkCardProps): JSX.Element => {
  return (
    <Link href={href} aria-label={`media link ${title}`}>
      <Card className="hover:bg-card/70 bg-card/50 group border-border/50 rounded-lg backdrop-blur-sm transition-colors">
        <CardContent className="flex flex-row items-center justify-between gap-5">
          <div className="flex flex-col gap-2 align-baseline">
            <CardTitle className="text-foreground text-lg">{title}</CardTitle>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <ArrowRight
            data-slot="arrow-right"
            className="text-muted-foreground group-hover:text-foreground size-5 transition-colors"
            strokeWidth={3}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default MediaLinkCard;
