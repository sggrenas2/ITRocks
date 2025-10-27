import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProfileImage } from './index';

const meta = {
  title: 'Atoms/ProfileImage',
  component: ProfileImage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de la imagen de perfil.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: '"sm" | "md" | "lg"' },
      }
    },
    className: {
      control: { type: 'text' },
      description: 'Clase CSS adicional para aplicar a la imagen de perfil.',
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      }
    },
    src: {
      control: { type: 'text' },
      description: 'URL de la imagen de perfil.',
      defaultValue: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      }
    },
    alt: {
      control: { type: 'text' },
      description: 'Texto alternativo para la imagen de perfil.',
      defaultValue: 'User avatar',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      }
    },
  },
  tags: ['autodocs'],
} satisfies Meta<ProfileImageProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64',
    alt: 'User avatar',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96',
    alt: 'User avatar',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128',
    alt: 'User avatar',
    size: 'lg',
  },
};