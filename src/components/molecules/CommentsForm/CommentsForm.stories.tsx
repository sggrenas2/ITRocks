import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import { CommentsForm } from './index';

const meta = {
  title: 'Molecules/CommentsForm',
  component: CommentsForm,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <div className="w-full max-w-2xl">
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Formulario para agregar comentarios a una publicación. Permite escribir texto e incluir imágenes.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommentsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postId: { post_id: 1 },
  },
};

export const DifferentPost: Story = {
  args: {
    postId: { post_id: 5 },
  },
};
