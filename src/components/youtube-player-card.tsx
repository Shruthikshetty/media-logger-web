'use client';

import Image from 'next/image';

import { Play } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import YoutubePlayer from './youtube-player';
import { cn } from '../lib/utils';

interface YoutubePlayerCardProps {
  videoId: string;
  title?: string;
  className?: string;
}

/**
 * YoutubePlayerCard wraps the YoutubePlayer in a card with a thumbnail
 * preview. Clicking the thumbnail or the "Play" button reveals the
 * embedded player.
 *
 * @param {string}  videoId   - YouTube video ID
 * @param {string}  [title]   - Card header label (defaults to "Trailer")
 * @param {string}  [className] - Extra classes for the outer Card
 */
const YoutubePlayerCard = ({
  videoId,
  title = 'Trailer',
  className,
}: YoutubePlayerCardProps) => {
  const [playing, setPlaying] = useState(false);

  // early return in  case of no video id
  if (!videoId) return null;

  //generate thumbnail url
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Card className={cn('border-border gap-0 overflow-hidden', className)}>
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between px-4 py-3">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Play className="text-primary stroke-primary h-4.5 w-4.5" />
          {title}
        </CardTitle>

        {!playing && (
          <Button
            size="sm"
            variant="outline"
            className="border-primary text-primary! hover:bg-primary/10 flex items-center gap-1.5"
            aria-label="Play trailer"
            onClick={() => setPlaying(true)}
          >
            <Play className="stroke-primary h-3.5 w-3.5" />
            Play
          </Button>
        )}
      </CardHeader>

      {/* Body */}
      <CardContent className="p-0">
        {playing ? (
          /* youtube player */
          <YoutubePlayer videoId={videoId} autoplay={1} />
        ) : (
          /* Thumbnail preview with centred play button */
          <button
            className="group relative block w-full cursor-pointer"
            onClick={() => setPlaying(true)}
            aria-label="Play trailer"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full">
              <Image
                src={thumbnailUrl}
                alt={`${title} thumbnail`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-200 group-hover:bg-black/40" />

            {/* Centred play circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/80 group-hover:bg-primary flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all duration-200 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 stroke-white text-white" />
              </div>
            </div>
          </button>
        )}
      </CardContent>
    </Card>
  );
};

export default YoutubePlayerCard;
