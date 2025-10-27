import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProfileContent } from './index';

const meta = {
  title: 'Atoms/ProfileContent',
  component: ProfileContent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ProfileContent muestra el nombre y el mail del usuario autenticado (carga sus datos desde redux).',
      }
    }
  },
  decorators: [
    (Story) => (
      <div className='w-400 bg-oxford-blue'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProfileContent />,
};
