import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/src/components/ui/input-group';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Info, Search } from 'lucide-react';

const meta: Meta<typeof InputGroup> = {
  title: 'UI/Input Group',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search media..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align={'inline-end'}>
        <Info />
      </InputGroupAddon>
    </InputGroup>
  ),
};
