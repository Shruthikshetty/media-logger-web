import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Select> = {
  title: 'Ui/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

/**
 * Example of basic usage
 */
export const SimpleSelect: StoryObj = {
  render: () => (
    <Select>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
