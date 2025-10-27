import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InputFile } from './index';

const meta = {
  title: 'Atoms/InputFile',
  component: InputFile,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <form className="w-96 h-64 flex justify-center items-center bg-oxford-blue">
        <Story />
        <button type='submit' className='ml-2 border border-platinum text-platinum p-2 flex items-center'>submit</button>
      </form>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      control: { type: 'text' },
      description: 'Valor inicial del input file. (usado para reiniciar el componente)',
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string | null' },
      }
    },
    action: {
      description: 'Función que se ejecuta al seleccionar un archivo.',
      table: {
        type: { summary: '(event: React.ChangeEvent<HTMLInputElement>) => void' },
      }
    },
    errorAction: {
      description: 'Función que se ejecuta al ocurrir un error en la selección del archivo.',
      table: {
        type: { summary: '(event: React.SyntheticEvent<HTMLInputElement, Event>) => void' },
      }
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Mensaje de error a mostrar cuando ocurre un error en la selección del archivo.',
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      }
    },
  }
} satisfies Meta<InputFileProps>;

export default meta;
type Story = StoryObj<InputFileProps>;

export const Default: Story = {
  args: {
    initialValue: '',
  },
};