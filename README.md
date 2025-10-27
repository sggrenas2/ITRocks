# 🌐 itrocks - Red Social

Una aplicación web moderna tipo red social construida con **Next.js 15**, **TypeScript**, **Tailwind CSS 4** y **Redux**. Permite a los usuarios autenticarse, ver publicaciones, hacer comentarios e interactuar socialmente.

## ✨ Características Principales

### 🔐 Autenticación
- Login con email y contraseña
- Validaciones de formulario (campos requeridos, formato de email)
- Integración con **NextAuth** para manejo seguro de sesiones
- Autenticación social (proveedores de terceros)
- Simulación de usuario autenticado con `localStorage`

### 📱 Feed de Publicaciones
- Visualización de publicaciones existentes con datos mockeados
- Carrusel de imágenes interactivo para cada publicación
- Sistema de comentarios en tiempo real
- Interfaz responsiva para mobile, tablet y desktop

### 💬 Sistema de Comentarios
- Agregar comentarios a publicaciones
- Soporte para incluir imágenes en comentarios
- Visualización de comentarios existentes con información del usuario
- Validación de entrada de datos

### 👍 Interacciones Sociales
- Sistema de likes en publicaciones
- Contador de comentarios
- Botones de compartir
- Indicadores visuales de interacciones

### 🎨 Diseño y UX
- Interfaz moderna y atractiva con Tailwind CSS 4
- Diseño totalmente responsivo
- Temas claro/oscuro
- Componentes reutilizables siguiendo Atomic Design
- Documentación visual con Storybook

## 🏗️ Arquitectura

### Estructura del Proyecto

```
itrocks/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── auth/                     # Rutas de autenticación
│   │   ├── feed/                     # Rutas del feed
│   │   ├── api/                      # API routes (NextAuth)
│   │   ├── globals.css               # Estilos globales
│   │   ├── layout.tsx                # Layout principal
│   │   └── page.tsx                  # Página de inicio
│   │
│   ├── components/                   # Componentes React
│   │   ├── atoms/                    # Componentes atómicos básicos
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── TextArea/
│   │   │   └── ...
│   │   ├── molecules/                # Componentes complejos
│   │   │   ├── CardHeader/
│   │   │   ├── CommentsForm/
│   │   │   ├── PostInteractions/
│   │   │   └── ...
│   │   ├── organisms/                # Componentes muy complejos
│   │   │   ├── Carousel/
│   │   │   ├── CommentsSection/
│   │   │   ├── PostCard/
│   │   │   └── ...
│   │   └── template/                 # Templates de página
│   │
│   ├── features/                     # Redux slices y lógica de negocio
│   │   ├── auth/                     # Autenticación
│   │   ├── posts/                    # Publicaciones
│   │   ├── profile/                  # Perfil de usuario
│   │   └── commonActions/            # Acciones compartidas
│   │
│   ├── store/                        # Configuración de Redux
│   │   ├── index.ts                  # Store principal
│   │   ├── hooks.ts                  # Hooks de Redux tipados
│   │   └── provider.tsx              # Redux Provider
│   │
│   ├── lib/                          # Librerías y configuraciones
│   │   └── nextauth/                 # Configuración NextAuth
│   │
│   ├── types/                        # Tipos TypeScript centralizados
│   │   ├── components/               # Tipos de componentes
│   │   ├── features/                 # Tipos de Redux
│   │   └── index.d.ts                # Tipos globales
│   │
│   ├── utils/                        # Utilidades y funciones auxiliares
│   │   ├── validators.ts             # Validadores
│   │   ├── getPosts.ts               # Obtener posts
│   │   └── ...
│   │
│   └── assets/                       # Datos estáticos
│       └── data/                     # Datos mockeados
│
├── public/                           # Archivos estáticos
├── .storybook/                       # Configuración de Storybook
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

### Patrones de Diseño

**Atomic Design**
- **Atoms**: Componentes básicos e indivisibles (Button, Input, etc.)
- **Molecules**: Combinación de atoms (CardHeader, CommentsForm, etc.)
- **Organisms**: Componentes muy complejos (Carousel, CommentsSection, etc.)
- **Templates**: Plantillas de página completas

## 🚀 Tecnologías

### Core Framework
- **Next.js 15** - Framework React con SSR/SSG
- **React 19** - Librería de UI
- **TypeScript** - Tipado estático

### Estilos
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - Procesador de CSS

### Estado Global
- **Redux** (@reduxjs/toolkit) - Manejo de estado global
- **Redux Thunk** - Middleware para acciones asincrónicas

### Autenticación
- **NextAuth** - Autenticación segura para Next.js

### Herramientas de Desarrollo
- **Storybook 9** - Documentación y prueba de componentes
- **ESLint** - Linting de código
- **Vitest** - Testing framework
- **TypeScript** - Lenguaje tipado

### Utilidades
- **@use-gesture/react** - Detección de gestos (swipe)
- **bcryptjs** - Hash de contraseñas
- **clsx** - Utilidad para condicionales de clases

## 📦 Instalación

### Requisitos Previos
- **Node.js** 18.17 o superior
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <URL-del-repositorio>
cd itrocks
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local
cp .env.example .env.local

# Configurar NextAuth (generar secret)
# La clave NEXTAUTH_SECRET se usa para encriptación
openssl rand -base64 32
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🛠️ Comandos Disponibles

### Desarrollo
```bash
npm run dev
# Inicia el servidor de desarrollo con Turbopack
```

### Producción
```bash
npm run build
npm start
# Compila y ejecuta la aplicación en producción
```

### Linting
```bash
npm run lint
# Ejecuta ESLint para verificar la calidad del código
```

### Storybook (Documentación de Componentes)
```bash
npm run storybook
# Inicia Storybook en http://localhost:6006

npm run build-storybook
# Compila Storybook para producción
```

## 🔓 Autenticación

### Credenciales de Prueba

Para probar la aplicación, utiliza las siguientes credenciales mockeadas:

```
Email: prueba@prueba.com
Contraseña: prueba1prueba
```

existen 5 perfiles para probar con email y contraseña, siguen el siguiente formato 

```
Email: prueba<numero del 2 al 5 | sin numero>@prueba.com
Contraseña: prueba<numero acorde al numero del mail>prueba
```

Por ejemplo 

```
Email: prueba3@prueba.com
Contraseña: prueba3prueba
```

adicionalmente se puede iniciar sesion mediante X (twitter)

### Cómo Funciona

1. La autenticación se simula con `localStorage`
2. Los datos del usuario se almacenan en Redux
3. NextAuth maneja las sesiones de forma segura
4. Redirige automáticamente a login si no está autenticado

## 🎨 Storybook - Documentación de Componentes

Para visualizar y documentar los componentes:

```bash
npm run storybook
```

Esto abrirá Storybook en `http://localhost:6006` con acceso a:

- **Molecules**: 8 componentes documentados
  - CardHeader
  - CarouselIndicators
  - CommentCard
  - CommentsForm
  - LoginForm
  - PostInteractions
  - ProfileCard
  - SocialSignIn

- **Organisms**: 4 componentes documentados
  - Carousel
  - CommentsSection
  - LoginCard
  - PostCard

## 📋 Características Implementadas

### ✅ Requisitos Principales

- [x] **Login**: Formulario con email y contraseña, validaciones
- [x] **Feed**: Visualización de publicaciones mockeadas
- [x] **Comentarios**: Sistema de comentarios en tiempo real
- [x] **Interacciones**: Likes, contador de comentarios
- [x] **SSR**: Páginas renderizadas en servidor
- [x] **Redux**: Estado global para autenticación y publicaciones
- [x] **TypeScript**: Código totalmente tipado
- [x] **Tailwind CSS**: Diseño responsivo
- [x] **Atomic Design**: Arquitectura de componentes

### ✅ Requisitos Extras

- [x] **Storybook**: 12 componentes documentados
- [x] **Interacciones Sociales**: Likes, comentarios, compartir
- [x] **Gestos Táctiles**: Swipe en carrusel

### ⏳ Por Implementar

- [ ] Deploy (GitHub Pages/Vercel)
- [ ] Tests unitarios
- [ ] Animaciones avanzadas

## 📱 Responsividad

La aplicacion utiliza breakpoints de Tailwind CSS para diseño adaptativo.

## 🗄️ Datos Mockeados

Los datos de prueba se encuentran en:
- `src/assets/data/posts.json` - Publicaciones de ejemplo
- `src/assets/data/comments.json` - Comentarios de ejemplo
- `src/utils/constants.ts` - Usuarios mockeados para acceso



### Tipos Centralizados
Todos los tipos se definen en `src/types/` siguiendo la estructura:
```
types/
├── components/          # Tipos de componentes
├── features/           # Tipos de Redux
└── index.d.ts         # Tipos globales
```

**Última actualización**: Octubre 2025
