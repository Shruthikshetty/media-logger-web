import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Sheet> = {
  title: 'Ui/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

//Stories
export const SimpleExample: StoryObj = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger className="border-border rounded-xl border px-4 py-2">
        Open
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
