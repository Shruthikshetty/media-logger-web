import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Skeleton } from '@/src/components/ui/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Ui/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

//Stories

/**
 * Default skeleton this is by passing height and width
 */
export const Default: Story = {
  args: {
    className: 'h-4 w-[250px]',
  },
};

/**
 * Circle skeleton this is by passing proper styles
 */
export const Circle: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
};

/**
 * Card skeleton this is by nesting skeleton component
 */
export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
