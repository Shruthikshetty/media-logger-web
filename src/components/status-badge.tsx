import { cn } from '../lib/utils';
import { MediaStatus } from '../types/global.types';
import { Badge } from './ui/badge';

const statusBadgeStyles: Record<MediaStatus, string> = {
  Planning: 'bg-purple-500/20 text-purple-400 border-purple-500',
  Watching: 'bg-blue-500/20 text-blue-400 border-blue-500',
  Playing: 'bg-blue-500/20 text-blue-400 border-blue-500',
  Completed: 'bg-green-500/20 text-green-600 border-green-600',
  Dropped: 'bg-red-500/20 text-red-400 border-red-400',
};

/**
 * @description this component is used to display the status of the media
 * @param status - the status of the media
 * @returns
 */
const StatusBadge = ({ status }: { status?: MediaStatus }) => {
  if (!status) {
    return null;
  }
  return (
    <Badge
      variant="outline"
      className={cn(
        'cursor-default px-1.5 py-0.5',
        statusBadgeStyles?.[status] ?? 'bg-secondary/50 border-border border',
      )}
    >
      {status}
    </Badge>
  );
};

export default StatusBadge;
