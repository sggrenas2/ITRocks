import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import { PostCard } from './index';

const meta = {
  title: 'Organisms/PostCard',
  component: PostCard,
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
        component: 'Tarjeta de publicación completa con encabezado del usuario, carrusel de imágenes, descripción e interacciones.',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post_id: 1,
    user_id: 1,
    description: 'Este es un post de ejemplo con múltiples imágenes. ¡Espero que les guste!',
    images: [
      'https://picsum.photos/600/400?random=20',
      'https://picsum.photos/600/400?random=21',
      'https://picsum.photos/600/400?random=22',
    ],
    likes: 42,
    commentsCount: 8,
    comments: [],
    withComments: true,
    fullText: false,
  },
};

export const WithSingleImage: Story = {
  args: {
    post_id: 2,
    user_id: 2,
    description: 'Un post con una sola imagen',
    images: ['https://picsum.photos/600/400?random=23'],
    likes: 15,
    commentsCount: 3,
    comments: [],
    withComments: true,
    fullText: false,
  },
};

export const FullText: Story = {
  args: {
    post_id: 3,
    user_id: 3,
    description: 'Este es un post con texto completo que puede ser bastante largo. Cuando fullText es true, se muestra todo el contenido sin truncar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      'https://picsum.photos/600/400?random=24',
      'https://picsum.photos/600/400?random=25',
    ],
    likes: 87,
    commentsCount: 23,
    comments: [],
    withComments: true,
    fullText: true,
  },
};

export const WithoutComments: Story = {
  args: {
    post_id: 4,
    user_id: 1,
    description: 'Este post no permite comentarios',
    images: ['https://picsum.photos/600/400?random=26'],
    likes: 34,
    commentsCount: 0,
    comments: [],
    withComments: false,
    fullText: false,
  },
};

export const ManyLikes: Story = {
  args: {
    post_id: 5,
    user_id: 4,
    description: 'Este post es muy popular y tiene muchos likes',
    images: [
      'https://picsum.photos/600/400?random=27',
      'https://picsum.photos/600/400?random=28',
      'https://picsum.photos/600/400?random=29',
      'https://picsum.photos/600/400?random=30',
    ],
    likes: 523,
    commentsCount: 156,
    comments: [],
    withComments: true,
    fullText: false,
  },
};

export const Truncated: Story = {
  args: {
    post_id: 6,
    user_id: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    images: ['https://picsum.photos/600/400?random=31'],
    likes: 28,
    commentsCount: 5,
    comments: [],
    withComments: true,
    fullText: false,
  },
};
