import { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'Ui/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

//Stories
export const SimpleExample: StoryObj = {
  render: (args) => (
    <Card {...args} className="w-87.5">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of your card component.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};
