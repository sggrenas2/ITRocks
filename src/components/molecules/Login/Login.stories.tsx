import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LoginForm } from './index';

const meta = {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Formulario de autenticación con campos de email y contraseña.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <LoginForm />
    </div>
  ),
};

export const CenteredLayout: Story = {
  render: () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg">
        <LoginForm />
      </div>
    </div>
  ),
};
