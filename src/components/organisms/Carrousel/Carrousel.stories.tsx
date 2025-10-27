import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Carousel } from './index';

const meta = {
  title: 'Organisms/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Carrusel interactivo con navegación por swipe, botones y indicadores. Soporta autoplay y gestos táctiles.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      {
        url: 'https://picsum.photos/600/400?random=1',
        alt: 'Imagen 1',
      },
      {
        url: 'https://picsum.photos/600/400?random=2',
        alt: 'Imagen 2',
      },
      {
        url: 'https://picsum.photos/600/400?random=3',
        alt: 'Imagen 3',
      },
    ],
    autoplay: true,
    interval: 3000,
    threshold: 3,
  },
};

export const SingleImage: Story = {
  args: {
    images: [
      {
        url: 'https://picsum.photos/600/400?random=4',
        alt: 'Imagen única',
      },
    ],
    autoplay: false,
  },
};

export const FiveImages: Story = {
  args: {
    images: [
      {
        url: 'https://picsum.photos/600/400?random=5',
        alt: 'Imagen 1',
      },
      {
        url: 'https://picsum.photos/600/400?random=6',
        alt: 'Imagen 2',
      },
      {
        url: 'https://picsum.photos/600/400?random=7',
        alt: 'Imagen 3',
      },
      {
        url: 'https://picsum.photos/600/400?random=8',
        alt: 'Imagen 4',
      },
      {
        url: 'https://picsum.photos/600/400?random=9',
        alt: 'Imagen 5',
      },
    ],
    autoplay: true,
    interval: 2000,
    threshold: 5,
  },
};

export const NoAutoplay: Story = {
  args: {
    images: [
      {
        url: 'https://picsum.photos/600/400?random=10',
        alt: 'Imagen 1',
      },
      {
        url: 'https://picsum.photos/600/400?random=11',
        alt: 'Imagen 2',
      },
      {
        url: 'https://picsum.photos/600/400?random=12',
        alt: 'Imagen 3',
      },
    ],
    autoplay: false,
  },
};
