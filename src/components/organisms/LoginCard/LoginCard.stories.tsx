import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LoginCard } from './index';

const meta = {
  title: 'Organisms/LoginCard',
  component: LoginCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tarjeta de login completa con formulario de credenciales y opciones de autenticación social.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <LoginCard />
    </div>
  ),
};

export const CompactView: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <LoginCard />
    </div>
  ),
};
