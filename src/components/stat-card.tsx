import { JSX } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

type StatCardProps = {
  title: string;
  description: string;
  Icon?: LucideIcon;
  iconStyles?: string;
  statNumber: number;
};

/**
 * A component that displays a statistic with a title, description, icon, and number.
 * It is a card with a header and content section.
 * The header section contains the title and the icon.
 * The content section contains the statistic number and the description.
 * @param {StatCardProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element for the component.
 */
const StatCard = ({
  title,
  description,
  Icon,
  iconStyles,
  statNumber,
}: StatCardProps): JSX.Element => {
  return (
    <Card className="gap-2 rounded-md border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/15">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-gray-300">{title}</CardTitle>
          {Icon && (
            <div>
              <Icon className={cn('size-5', iconStyles)} />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{statNumber}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
