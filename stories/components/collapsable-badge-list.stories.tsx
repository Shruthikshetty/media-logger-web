import CollapsableBadgeList from '@/src/components/collapsable-badge-list';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

/**
 * A list of badges that automatically collapses when it exceeds a certain count.
 * Useful for displaying tags, genres, or categories in limited space.
 */
const meta: Meta<typeof CollapsableBadgeList> = {
  title: 'Components/CollapsableBadgeList',
  component: CollapsableBadgeList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxDisplayed: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of items to show before collapsing',
    },
    isDisabled: {
      control: 'boolean',
      description: 'If true, the expand/collapse button is non-interactive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- Stories ---

/**
 * A standard list with fewer items than the default max (3).
 */
export const Default: Story = {
  args: {
    list: ['Action', 'Adventure', 'RPG'],
  },
};

/**
 * A longer list that demonstrates the collapse functionality.
 */
export const Collapsed: Story = {
  args: {
    list: [
      'Sci-Fi',
      'Cyberpunk',
      'Dystopian',
      'Thriller',
      'Mystery',
      'Philosophical',
    ],
    maxDisplayed: 3,
  },
};

/**
 * Customizing the number of visible items before the "+N" badge appears.
 */
export const CustomMaxDisplay: Story = {
  args: {
    list: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Zustand',
      'Storybook',
    ],
    maxDisplayed: 1,
  },
};

/**
 * When disabled, the badges can be seen but the "+N" button cannot be clicked.
 */
export const Disabled: Story = {
  args: {
    ...Collapsed.args,
    isDisabled: true,
  },
};

/**
 * Demonstrating the use of custom styles via the `style` prop.
 */
export const CustomStyling: Story = {
  args: {
    list: ['Primary', 'Secondary', 'Accent', 'Ghost'],
    maxDisplayed: 2,
    style: {
      root: 'bg-slate-100 p-4 rounded-xl border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800',
      itemBadge:
        'bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-3 py-1',
      buttonBadge: 'bg-amber-500 text-amber-950 hover:bg-amber-400 font-bold',
    },
  },
};
