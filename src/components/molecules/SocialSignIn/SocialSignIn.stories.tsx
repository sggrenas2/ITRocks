import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SocialSignIn } from './index';

const meta = {
  title: 'Molecules/SocialSignIn',
  component: SocialSignIn,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botones de autenticación con proveedores de redes sociales (Google, GitHub, etc).',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <SocialSignIn />
    </div>
  ),
};

export const CenteredLayout: Story = {
  render: () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg">
        <SocialSignIn />
      </div>
    </div>
  ),
};
