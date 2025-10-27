import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import { PostInteractions } from './index';

const meta = {
  title: 'Molecules/PostInteractions',
  component: PostInteractions,
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
        component: 'Componente de interacciones del post mostrando likes, comentarios y botones de acción.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostInteractions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithComments: Story = {
  args: {
    likes: 42,
    comments: 8,
    post_id: 1,
    withComments: true,
  },
};

export const WithoutComments: Story = {
  args: {
    likes: 25,
    comments: 0,
    post_id: 2,
    withComments: false,
  },
};

export const ManyInteractions: Story = {
  args: {
    likes: 523,
    comments: 87,
    post_id: 3,
    withComments: true,
  },
};

export const NoInteractions: Story = {
  args: {
    likes: 0,
    comments: 0,
    post_id: 4,
    withComments: true,
  },
};
