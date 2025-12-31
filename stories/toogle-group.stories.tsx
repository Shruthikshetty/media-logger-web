/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ToggleGroup, ToggleGroupItem } from '@/src/components/ui/toggle-group';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Bold, Italic, Underline } from 'lucide-react';
const meta = {
  title: 'Ui/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'outline',
    type: 'single',
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

//Stories
export const SimpleExample: StoryObj = {
  render: (args) => (
    // @ts-expect-error
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
