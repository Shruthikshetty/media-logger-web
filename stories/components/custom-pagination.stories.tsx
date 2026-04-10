import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CustomPagination from '@/src/components/custom-pagination';
import { fn } from 'storybook/test';

const meta: Meta<typeof CustomPagination> = {
  title: 'Components/CustomPagination',
  component: CustomPagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    setPage: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof CustomPagination>;

/**
 * Default pagination starting at page 1
 */
export const Default: Story = {
  args: {
    page: 1,
    pagination: {
      total: 100,
      start: 0,
      limit: 10,
      currentPage: 1,
      totalPages: 10,
      hasMore: true,
      hasPrevious: false,
      nextPage: 2,
      previousPage: null,
    },
  },
};

/**
 * Pagination in the middle of the range, showing both next/prev and ellipses
 */
export const MiddlePage: Story = {
  args: {
    page: 5,
    pagination: {
      total: 100,
      start: 40,
      limit: 10,
      currentPage: 5,
      totalPages: 10,
      hasMore: true,
      hasPrevious: true,
      nextPage: 6,
      previousPage: 4,
    },
  },
};

/**
 * Pagination at the end of the range
 */
export const LastPage: Story = {
  args: {
    page: 10,
    pagination: {
      total: 100,
      start: 90,
      limit: 10,
      currentPage: 10,
      totalPages: 10,
      hasMore: false,
      hasPrevious: true,
      nextPage: null,
      previousPage: 9,
    },
  },
};

/**
 * Pagination with few pages, fitting entirely without ellipses
 */
export const FewPages: Story = {
  args: {
    page: 1,
    pagination: {
      total: 30,
      start: 0,
      limit: 10,
      currentPage: 1,
      totalPages: 3,
      hasMore: true,
      hasPrevious: false,
      nextPage: 2,
      previousPage: null,
    },
  },
};
