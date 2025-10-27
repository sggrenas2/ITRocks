import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "./index";
import { ButtonProps } from "@/types/components/atoms/button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    onClick: fn(),
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "icon"],
      description: "La variante en el estilo del boton",
      table: {
        type: { summary: '"primary" | "secondary" | "icon"' },
      }
    },
    size: {
      control: { type: "radio" },
      options: ["full", "medium", "small"],
      description: "El tamaño del botón",
      table: {
        type: { summary: '"full" | "medium" | "small"' },
      }
    },
    label: {
      control: "text",
      description: "Texto o contenido del botón",
      table: { type: { summary: "string" } },
    },
    isLoading: {
      control: "boolean",
      description: "Estado de carga del botón",
      table: { type: { summary: "boolean" } },
    },
    authBehavior: {
      control: "object",
      description: "Comportamiento de autenticación del botón",
      table: {
        type: {
          summary: "LoginBehavior | LogoutBehavior",
          detail: `interface LoginBehavior {
  type: "login";
  provider: string;
  options: SignInOptions;
}

interface LogoutBehavior {
  type: "logout";
  options: SignOutParams;
}
`,
        },
      },
    },
    action: {
      control: fn(),
      description:
        "Función a ejecutar al hacer clic en el botón envia como parametro el EVENT de click",
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFull: Story = {
  args: {
    variant: "primary",
    size: "full",
    label: "Click me",
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    label: "Button",
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    label: "Small",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "full",
    label: "Secondary Button",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    label: "Secondary",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    label: "Sec",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    label: "→",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "full",
    label: "Loading...",
    isLoading: true,
  },
};
