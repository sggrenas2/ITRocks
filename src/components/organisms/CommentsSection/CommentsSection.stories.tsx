import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import { CommentsSection } from './index';

const meta = {
  title: 'Organisms/CommentsSection',
  component: CommentsSection,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <div className="w-full max-w-2xl bg-oxford-blue rounded-lg">
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Sección de comentarios que muestra la lista de comentarios existentes y un formulario para agregar nuevos.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommentsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutComments: Story = {
  args: {
    postId: { post_id: 1 },
    comments: [],
  },
};

export const WithComments: Story = {
  args: {
    postId: { post_id: 1 },
    comments: [
      {
        post_id: 1,
        user_id: 1,
        likes: 5,
        content: 'Este es un comentario genial!',
        image: null,
      },
      {
        post_id: 1,
        user_id: 2,
        likes: 3,
        content: 'Totalmente de acuerdo contigo',
        image: null,
      },
    ],
  },
};

export const WithCommentsAndImages: Story = {
  args: {
    postId: { post_id: 2 },
    comments: [
      {
        post_id: 2,
        user_id: 1,
        likes: 12,
        content: 'Mira esta imagen que compartí',
        image: 'https://picsum.photos/100/100?random=1',
      },
      {
        post_id: 2,
        user_id: 3,
        likes: 8,
        content: 'Excelente foto!',
        image: null,
      },
      {
        post_id: 2,
        user_id: 4,
        likes: 15,
        content: 'Me encanta este contenido',
        image: 'https://picsum.photos/100/100?random=2',
      },
    ],
  },
};

export const ManyComments: Story = {
  args: {
    postId: { post_id: 3 },
    comments: Array.from({ length: 10 }, (_, i) => ({
      post_id: 3,
      user_id: i + 1,
      likes: Math.floor(Math.random() * 50),
      content: `Comentario número ${i + 1}: Este es un comentario de prueba en la sección`,
      image: i % 3 === 0 ? `https://picsum.photos/100/100?random=${i}` : null,
    })),
  },
};
