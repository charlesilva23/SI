# Project Overview

This is a Next.js application that provides a Kanban-style task management board. It allows users to create, view, and manage tasks (tickets) in a drag-and-drop interface. The application uses a client-server architecture, with the frontend built using Next.js, React, and Tailwind CSS, and the backend presumably providing a RESTful API for managing tickets.

## Main Technologies

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS, shadcn/ui
*   **Data Fetching:** TanStack Query, Axios
*   **UI:** React
*   **Drag and Drop:** dnd-kit
*   **Schema Validation:** Zod
*   **Linting:** ESLint, Biome

## Architecture

The application follows a component-based architecture. The main page displays a Kanban board with columns representing different stages of a task (e.g., Backlog, In Progress, Done). Tasks are represented as cards that can be dragged and dropped between columns.

Data is fetched from a backend API using TanStack Query and Axios. The API endpoint for fetching all tickets is `/tickets`. The base URL for the API is configured using the `NEXT_PUBLIC_API_BASE_URL` environment variable.

# Building and Running

## Prerequisites

*   Node.js
*   npm or yarn

## Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Running the Development Server

1.  Create a `.env.local` file in the root of the project and add the following environment variable:

    ```
    NEXT_PUBLIC_API_BASE_URL=<your_api_base_url>
    ```

2.  Start the development server:

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create an optimized build of the application in the `.next` directory.

## Running in Production

To start the application in production mode, run the following command:

```bash
npm run start
```

# Development Conventions

*   **Linting:** The project uses ESLint and Biome for code linting. Run `npm run lint` to check for linting errors.
*   **Component Structure:** Components are organized in the `src/components` directory. Each component has its own directory with an `index.tsx` file.
*   **Data Fetching:** Data fetching is handled using TanStack Query. Hooks for fetching data are located in the `src/app/home/hooks` directory.
*   **API Requests:** API requests are made using Axios. The API client is configured in `src/lib/api-manager.ts`.

# Ticket Entity
The ticket entity has the following structure:
```typescript
export type Ticket = {
	id: string
	title: string
	description: string
	author: string
	statusId: number | null
	statusName: string
	createdAt: string
	updatedAt: string
}
```

# Ticket Creation Schema
The schema for creating a new ticket is defined in `src/schemas/create-ticket-schema.ts`.
It's a simple Zod schema:
```typescript
import { z } from "zod"

export const createTicketSchema = z.string().min(1, "Campo Obrigatório")
```
**Note:** This schema seems incomplete, as it only validates a single string field. A complete ticket creation schema would likely include fields for `title`, `description`, etc.

# Login Page

The application has a login page at the `/login` route. The page displays a simple login form with fields for email and password. The form is implemented in the `src/components/form/index.tsx` component.

**Note:** The login form is a placeholder and does not have any authentication logic implemented yet.
