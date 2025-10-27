import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { CarouselButton } from './index';
import { CarouselButtonProps } from '@/types/components/atoms/carrouselButton';

const meta = {
  title: 'Atoms/CarouselButton',
  component: CarouselButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { onClick: fn(),
    direction: {
      control: { type: 'radio' },
      options: ['prev', 'next'],
      description: 'Direccion a donde apunta la flecha del boton',
      table: {
        defaultValue: { summary: 'prev' },
        type: { summary: 'string',
          detail: "'prev' | 'next'"
         },
      }
    }
   },
} satisfies Meta<CarouselButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Previous: Story = {
  args: {
    direction: 'prev',
    onClick: fn(),
  },
};

export const Next: Story = {
  args: {
    direction: 'next',
    onClick: fn(),
  },
};
