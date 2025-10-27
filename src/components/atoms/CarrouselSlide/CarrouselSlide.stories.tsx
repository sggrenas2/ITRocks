import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CarouselSlide } from './index';

const meta = {
  title: 'Atoms/CarouselSlide',
  component: CarouselSlide,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: { type: 'text' },
      description: 'URL de la imagen a mostrar en la diapositiva',
      table: {
        defaultValue: { summary: "''" },
        type: { summary: 'string' },
      }
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Indica si la diapositiva esta activa o no, si no esta activa no se muestra',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    alt: {
      control: { type: 'text' },
      description: 'Texto alternativo para la imagen de la diapositiva',
      table: {
        defaultValue: { summary: "''" },
        type: { summary: 'string' },
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-64 flex justify-center items-center bg-oxford-blue">
        <Story />
      </div>
    ),
  ]
} satisfies Meta<CarouselSlideProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=600',
    isActive: true,
    alt: 'Slide 1',
  },
};

export const Inactive: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=600',
    isActive: false,
    alt: 'Slide 2',
  },
};

export const WithoutAlt: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1505739998589-60d34d4662d0?w=800&h=600',
    isActive: true,
  },
};
