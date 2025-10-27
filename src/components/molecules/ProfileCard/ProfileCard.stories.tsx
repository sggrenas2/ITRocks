import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import { ProfileCard } from './index';

const meta = {
  title: 'Molecules/ProfileCard',
  component: ProfileCard,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tarjeta de perfil del usuario autenticado con su imagen y botón de logout.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl bg-gray-900 p-8">
      <ProfileCard />
    </div>
  ),
};
