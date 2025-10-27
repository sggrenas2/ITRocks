import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CardHeader } from './index';

const meta = {
  title: 'Molecules/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'centered',
    background: 'dark',
    docs: {
      description: {
        component: 'Encabezado de tarjeta que muestra la información del usuario (nombre e imagen de perfil).',
      }
    }
  },
  argTypes:{
    id: {
        description: 'ID del usuario cuyo encabezado se mostrará.',
        control: 'number',
        defaultValue: 1,
    }
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<CardHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
  },
};

export const UserId2: Story = {
  args: {
    id: 2,
  },
};

export const UserId3: Story = {
  args: {
    id: 3,
  },
};
