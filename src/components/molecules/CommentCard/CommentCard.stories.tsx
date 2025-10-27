import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CommentsCard } from './index';

const meta = {
  title: 'Molecules/CommentCard',
  component: CommentsCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tarjeta que muestra un comentario con información del usuario, contenido de texto e imagen opcional.',
      }
    },
  },
  argTypes: {
    comment: {
      description: 'Objeto que contiene los datos del comentario a mostrar.',
      control: 'object',
      table: {
        type: { summary: 'Comment',
            detail: `{
              post_id: number;
              user_id: number;
              likes: number;
              content: string;
              image: string | null;
            }`
         }
      }
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommentsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    comment: {
      post_id: 1,
      user_id: 1,
      likes: 5,
      content: 'Este es un comentario muy interesante sobre el post. Me gustó mucho!',
      image: null,
    },
  },
};

export const WithImage: Story = {
  args: {
    comment: {
      post_id: 1,
      user_id: 2,
      likes: 12,
      content: 'Mira esta imagen que compartí en mi comentario',
      image: 'https://picsum.photos/300/200?random=1',
    },
  },
};

export const LongContent: Story = {
  args: {
    comment: {
      post_id: 1,
      user_id: 3,
      likes: 3,
      content: 'Este es un comentario muy largo que tiene múltiples líneas de texto para demostrar cómo se ve cuando el contenido es extenso. Puede incluir múltiples párrafos y diferentes tipos de contenido que se adapta bien en la tarjeta.',
      image: 'https://picsum.photos/300/200?random=2',
    },
  },
};
