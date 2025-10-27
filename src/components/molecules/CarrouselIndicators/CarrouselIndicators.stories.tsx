import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CarouselIndicators } from './index';

const meta = {
  title: 'Molecules/CarouselIndicators',
  component: CarouselIndicators,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Indicadores visuales para navegar entre slides en un carrusel.',
      }
    }
  },
  argTypes: {
    totalSlides: {
      description: 'Total de slides en el carrusel.',
      control: 'number',
      defaultValue: 3,
    },
    currentSlide: {
      description: 'Slide actualmente activo.',
      control: 'number',
      defaultValue: 0,
    },
    onSelect: {
      description: 'Función llamada al seleccionar un indicador.',
      action: 'selected',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<CarouselIndicatorsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeIndicators: Story = {
  args: {
    totalSlides: 3,
    currentSlide: 0,
    onSelect: (index: number) => console.log(`Clicked indicator ${index}`),
  },
};

export const FiveIndicators: Story = {
  args: {
    totalSlides: 5,
    currentSlide: 2,
    onSelect: (index: number) => console.log(`Clicked indicator ${index}`),
  },
};

export const SecondActive: Story = {
  args: {
    totalSlides: 4,
    currentSlide: 1,
    onSelect: (index: number) => console.log(`Clicked indicator ${index}`),
  },
};

export const LastActive: Story = {
  args: {
    totalSlides: 5,
    currentSlide: 4,
    onSelect: (index: number) => console.log(`Clicked indicator ${index}`),
  },
};
