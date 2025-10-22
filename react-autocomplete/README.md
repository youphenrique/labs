# React Autocomplete

A React application that demonstrates a custom autocomplete component with debounced search functionality. The application includes a form with an autocomplete field for selecting professions and a date picker.

## Features

- Custom autocomplete component with debounced search
- Form validation using React Hook Form
- Data fetching with React Query
- Material UI for styling
- Mock API using json-server

## Main Dependencies

- React 19
- TypeScript
- Vite
- Material UI
- React Query
- React Hook Form
- json-server (for mock API)
- use-debounce
- date-fns

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
```

### Running the Application

1. Start the mock API server:

```bash
npm run server
# or
yarn server
```

2. In a separate terminal, start the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

### Building for Production

```bash
npm run build
# or
yarn build
```

## Environment Variables

The application uses the following environment variables:

- `VITE_BASE_API_URI`: The base URL for the json-server mock API (default: http://127.0.0.1:3000)

## Project Structure

- `src/components/`: React components, including the custom autocomplete component
- `src/pages/`: Application pages
- `src/api/`: API client functions
- `src/server/`: Mock API data

## Available Scripts

- `dev`: Runs the development server with Vite
- `build`: Compiles TypeScript and builds the project
- `lint`: Runs ESLint
- `server`: Runs json-server with a local database file
- `preview`: Previews the built application
