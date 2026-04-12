'use client';

import {
  Play,
  CheckCircle2,
  Clock,
  XCircle,
  Sparkles,
  Compass,
  Plus,
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { MediaStatus, OnModelType } from '@/src/types/global.types';
import { MEDIA_LABELS } from '../constants/screen.constants';
import { cn } from '@/src/lib/utils';

//types
interface EmptyStatusStateProps {
  status: MediaStatus | 'All';
  mediaType: OnModelType;
  handleAction?: () => void;
  className?: string;
}

/**
 * EmptyStatusState component to display a placeholder instead of an empty list
 * @param status - The status of the media type
 * @param mediaType - The type of media (Movie, TVShow, Game)
 * @param handleAction - Optional callback function to handle the action button click
 * @returns EmptyStatusState component
 */
const EmptyStatusState = ({
  status,
  mediaType,
  handleAction = () => {},
  className,
}: EmptyStatusStateProps) => {
  // get the icon and media name
  const { plural, icon: MediaIcon } = MEDIA_LABELS[mediaType];

  //function to get the content based on the media tye and status
  const getEmptyStateContent = () => {
    switch (status) {
      case 'Watching':
      case 'Playing':
        return {
          icon: Play,
          title: `Not ${mediaType === 'Game' ? 'playing' : 'watching'} anything right now`,
          subtitle: `Your current ${plural} list is empty. Time to discover something new!`,
          action: `Browse ${plural}`,
          color: 'from-primary/20 to-primary/10',
        };
      case 'Completed':
        return {
          icon: CheckCircle2,
          title: 'Nothing completed yet',
          subtitle: `You haven't finished any ${plural} yet. Keep going!`,
          action: `Find ${plural} to complete`,
          color: 'from-success/20 to-success/10',
        };
      case 'Planning':
        return {
          icon: Clock,
          title: `Your ${mediaType === 'Game' ? 'backlog' : 'watch list'} is empty`,
          subtitle: `No ${plural} planned for later. Start building your list!`,
          action: `Add ${plural} to plan`,
          color: 'from-warning/20 to-warning/10',
        };
      case 'Dropped':
        return {
          icon: XCircle,
          title: `Nothing dropped`,
          subtitle: `You haven't dropped any ${plural}. That's actually great!`,
          action: `Browse ${plural}`,
          color: 'from-destructive/20 to-destructive/10',
        };
      case 'All':
        return {
          icon: MediaIcon,
          title: `No ${plural} in your library`,
          subtitle: `Start adding ${plural} to track your ${mediaType === 'Game' ? 'gaming' : 'watching'} journey!`,
          action: `Discover ${plural}`,
          color: 'from-primary/20 to-primary/10',
        };
      default:
        return {
          icon: Compass,
          title: `Discover new ${plural}`,
          subtitle: `Start exploring and find your next favorite ${MEDIA_LABELS[mediaType].singular}!`,
          action: `Browse ${plural}`,
          color: 'from-primary/20 to-primary/10',
        };
    }
  };

  // get the content based on the media tye and status
  const content = getEmptyStateContent();
  const IconComponent = content.icon;

  return (
    <div
      className={cn(
        'bg-card/50 to-card/30 border-border/30 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border bg-linear-to-b px-8 py-16 backdrop-blur-sm',
        className,
      )}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-linear-to-br ${content.color} opacity-60 blur-3xl`}
        />
        <div
          className={`absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-linear-to-br ${content.color} opacity-60 blur-3xl`}
        />
      </div>

      {/* Illustration */}
      <div className="relative mb-8">
        <div
          className={`bg-linear-to-br ${content.color} border-primary/20 flex h-32 w-32 items-center justify-center rounded-3xl border shadow-lg`}
        >
          <IconComponent
            className="text-primary/70 h-16 w-16"
            strokeWidth={1.5}
          />
        </div>
        {/* Floating sparkles */}
        <Sparkles className="text-primary/40 absolute -top-2 -right-2 h-6 w-6 animate-pulse" />
        <div
          className="bg-primary/30 absolute -bottom-1 -left-1 h-4 w-4 animate-bounce rounded-full"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="bg-primary/20 absolute top-1/2 -right-4 h-3 w-3 animate-bounce rounded-full"
          style={{ animationDelay: '0.4s' }}
        />
      </div>

      {/* Text content */}
      <h3 className="text-foreground mb-2 text-center text-xl font-bold">
        {content.title}
      </h3>
      <p className="text-muted-foreground mb-6 max-w-sm text-center">
        {content.subtitle}
      </p>

      {/* Action button */}
      <Button
        onClick={handleAction}
        className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-primary/20 flex flex-row items-center gap-2 bg-linear-to-r shadow-lg"
      >
        <Plus className="h-4 w-4" />
        {content.action}
      </Button>

      {/* Decorative bottom text */}
      <p className="text-muted-foreground/60 mt-8 flex items-center gap-2 text-xs">
        <Sparkles className="h-3 w-3" />
        Start building your collection
        <Sparkles className="h-3 w-3" />
      </p>
    </div>
  );
};

export default EmptyStatusState;
