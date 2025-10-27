import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { CarouselIndicator } from './index';

const meta = {
  title: 'Atoms/CarouselIndicator',
  component: CarouselIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
      description: 'Indica si el indicador esta activo o no',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    slideNumber: {
      control: { type: 'number' },
      description: 'Numero de la diapositiva a la que apunta el indicador',
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="w-100 flex justify-center items-center h-20 w-20 bg-oxford-blue">
        <Story />
      </div>
    ),
  ]
} satisfies Meta<typeof CarouselIndicator>;

export default meta;
type Story = StoryObj<CarouselIndicatorProps>;

export const Active: Story = {
  args: {
    isActive: true,
    slideNumber: 0,
    onClick: fn(),
  },
};

export const Inactive: Story = {
  args: {
    isActive: false,
    slideNumber: 1,
    onClick: fn(),
  },
};

export const MultipleIndicators: Story = {
  args: {
    isActive: true,
    slideNumber: 0,
    onClick: fn(),
  },
  render: () => (
    <div className="flex gap-2 justify-center items-center">
      <CarouselIndicator isActive={true} slideNumber={0} onClick={fn()} />
      <CarouselIndicator isActive={false} slideNumber={1} onClick={fn()} />
      <CarouselIndicator isActive={false} slideNumber={2} onClick={fn()} />
    </div>
  ),
};
