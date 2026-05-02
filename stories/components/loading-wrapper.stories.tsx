import {
  LoadingProvider,
  LoadingWrapper,
} from '@/src/components/custom-loader';
import { Skeleton } from '@/src/components/ui/skeleton';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof LoadingWrapper> = {
  title: 'Components/LoadingWrapper',
  component: LoadingWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isLoading: true,
    children: (
      <div>
        <h1>Children Content</h1>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <LoadingProvider isLoading={false}>
        <Story />
      </LoadingProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

// default case
export const Default: Story = {
  args: {},
};

// with fallback
export const WithFallback: Story = {
  args: {
    fallback: <Skeleton className="h-32 w-32 rounded-full" />,
  },
};
