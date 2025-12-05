# CS Kanban Frontend

## Visão Geral do Projeto

Este é uma aplicação frontend Next.js que implementa um quadro Kanban interativo para gerenciamento de tarefas. Ele permite aos usuários criar, visualizar e organizar tarefas (tickets) através de uma interface de arrastar e soltar (drag-and-drop). A aplicação utiliza uma arquitetura cliente-servidor, com o frontend construído com Next.js, React e Tailwind CSS, e se comunica com um backend API RESTful para o gerenciamento dos tickets.

## Principais Tecnologias

*   **Framework:** Next.js
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS, shadcn/ui
*   **Gerenciamento de Estado/Cache:** TanStack Query
*   **Requisições HTTP:** Axios
*   **Interface do Usuário:** React
*   **Funcionalidade Drag and Drop:** dnd-kit
*   **Validação de Esquemas:** Zod
*   **Linting e Formatação:** ESLint, Biome (Configurados para garantir a qualidade do código)

## Arquitetura

A aplicação segue uma arquitetura baseada em componentes. A página principal exibe um quadro Kanban com colunas que representam diferentes estágios de uma tarefa (e.g., Backlog, Em Desenvolvimento, Concluído). As tarefas são representadas como cartões (cards) que podem ser arrastados e soltos entre as colunas ou reordenados dentro delas.

Os dados são buscados de uma API de backend usando TanStack Query e Axios. O endpoint da API para buscar todos os tickets é `/tickets`. A URL base para a API é configurada através da variável de ambiente `NEXT_PUBLIC_API_BASE_URL`.

A lógica central do quadro Kanban (gerenciamento de colunas, tickets e eventos de drag-and-drop) foi refatorada para um [custom hook](./src/components/tables/home-table/use-kanban.ts), tornando o componente principal mais limpo e focado na renderização da UI.


## Como Iniciar o Projeto

### Pré-requisitos

*   Node.js (versão recomendada: 18.x ou superior)
*   npm ou Yarn

### Instalação

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Rodando o Servidor de Desenvolvimento

1.  Crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte variável de ambiente, substituindo pelo endereço da sua API de backend:
    ```
    NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api # Exemplo
    ```
2.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:3000`.

### Construindo para Produção

Para construir a aplicação para produção, execute o seguinte comando:

```bash
npm run build
```
Isso criará uma versão otimizada da aplicação no diretório `.next`.

### Rodando em Produção

Para iniciar a aplicação em modo de produção (após a build):

```bash
npm run start
```

## Convenções de Desenvolvimento

*   **Linting:** O projeto utiliza ESLint e Biome para linting e formatação de código.
*   **Estrutura de Componentes:** Componentes são organizados no diretório `src/components`. Cada componente geralmente possui seu próprio diretório com um arquivo `index.tsx`.
*   **Busca de Dados:** A busca de dados é feita usando TanStack Query. Hooks específicos para busca de dados estão localizados em `src/app/home/hooks`.
*   **Requisições de API:** Requisições de API são realizadas usando Axios, configurado em `src/lib/api-manager.ts`.

