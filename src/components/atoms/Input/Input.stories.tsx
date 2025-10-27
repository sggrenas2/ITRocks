import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './index';

interface StorybookProps extends InputProps {
  value?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <form className="w-96 h-64 flex justify-center items-center bg-oxford-platinum">
        <Story />
        <button type='submit' className='ml-2 border border-oxford-blue p-2 flex items-center'>submit</button>
      </form>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Etiqueta del campo de entrada',
      table: {
        defaultValue: { summary: "''" },
        type: { summary: 'string' },
      }
    },
    error: {
      control: { type: 'text' },
      description: 'Mensaje de error del campo de entrada (se muestra con los errores disparados por la validacion nativa de html)',
      table: {
        defaultValue: { summary: "''" },
        type: { summary: 'string' },
      }
    },
    sizeInput: {
      control: { type: 'radio' },
      options: ['full', 'medium', 'small'],
      description: 'Tamaño del campo de entrada (e.g., small, medium, large)',
      table: {
        defaultValue: { summary: "'text'" },
        type: { summary: 'string' },
      }
    },
    type: {
      control: { type: 'text' },
      description: 'Tipo de campo de entrada (attributo type nativo de html)',
      table: {
        defaultValue: { summary: "'text'" },
        type: { summary: 'string' },
      }
    },
    value: {
      control: { type: 'text' },
      description: 'Valor del campo de entrada (attributo value nativo de html)',
      table: {
        defaultValue: { summary: "''" },
        type: { summary: 'string' },
      }
    },
  }
} satisfies Meta<StorybookProps>;

export default meta;
type Story = StoryObj<StorybookProps>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'asdas'
  },
};

export const FullSize: Story = {
  args: {
    label: 'Full Name',
    sizeInput: 'full',
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Username',
    sizeInput: 'medium',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Code',
    sizeInput: 'small',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Invalid email',
    type: 'email',
    error: 'Please enter a valid email address',
    required: true,
  },
};
