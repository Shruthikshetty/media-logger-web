'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// types
interface StarRatingProps {
  totalStars?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (rating: number) => void;
  size?: number;
  label?: string;
  className?: string;
  hideRatingValue?: boolean;
  disabled?: boolean;
}

/**
 * A star rating component that supports half-star selection.
 * Features smooth hover animations and customizable scale.
 */
const StarRating = ({
  totalStars = 10,
  value,
  defaultValue = 0,
  onChange,
  size = 20, // star size in px
  label,
  className,
  hideRatingValue = false,
  disabled = false,
}: StarRatingProps) => {
  const [internalRating, setInternalRating] = useState(defaultValue);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // derived state
  const currentRating = value !== undefined ? value : internalRating;
  const displayRating = hoverRating !== null ? hoverRating : currentRating;

  // handle move move on star to fill with color
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    starIndex: number,
  ) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    // Determine if we are hovering over the left or right half of the star
    const isHalf = x < rect.width / 2;
    const val = starIndex + (isHalf ? 0.5 : 1);
    setHoverRating(val);
  };

  // clear hover state when mouse leaves
  const handleMouseLeave = () => {
    if (disabled) return;
    setHoverRating(null);
  };

  // handle click to set rating
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    starIndex: number,
  ) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isHalf = x < rect.width / 2;
    const newRating = starIndex + (isHalf ? 0.5 : 1);

    if (value === undefined) {
      setInternalRating(newRating);
    }
    onChange?.(newRating);
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {label && (
        <span className="text-foreground/80 text-sm font-medium">{label}</span>
      )}
      <div
        className="flex items-center gap-1"
        onMouseLeave={handleMouseLeave}
        role="slider"
        aria-valuenow={displayRating}
        aria-valuemin={0}
        aria-valuemax={totalStars}
      >
        {[...Array(totalStars)].map((_, i) => {
          const starValue = i + 1;
          let fillPercentage = 0;

          if (displayRating >= starValue) {
            fillPercentage = 100;
          } else if (displayRating > i) {
            fillPercentage = (displayRating - i) * 100;
          }

          return (
            <div
              key={i}
              className={cn(
                'relative z-10 cursor-pointer transition-all duration-200 hover:z-20 hover:scale-125',
                disabled && 'cursor-not-allowed',
              )}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onClick={(e) => handleClick(e, i)}
            >
              {/* Background Star (Empty) */}
              <Star
                size={size}
                className={cn('stroke-primary transition-colors duration-300')}
                strokeWidth={1.5}
              />

              {/* Foreground Star (Filled) - using absolute positioning and width to clip */}
              <div
                className="pointer-events-none absolute top-0 left-0 overflow-hidden transition-all duration-100 ease-out"
                style={{ width: `${fillPercentage}%` }}
              >
                <Star
                  size={size}
                  className="fill-primary text-primary"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* rating value */}
      {!hideRatingValue ? (
        <div className="flex min-w-10 items-center text-sm font-bold">
          <span className="text-foreground">
            {displayRating > 0 ? displayRating.toFixed(1) : '-'}
          </span>
          <span className="text-muted-foreground">/{totalStars}</span>
        </div>
      ) : null}
    </div>
  );
};

export default StarRating;
