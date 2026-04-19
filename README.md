![A](public/assets/img/waifu.png)
# Kawaii Api (https://kawaii.up.railway.app/)

A robust and modern REST API designed to serve high-quality SFW and NSFW anime images and GIFs, backed by Discord's CDN. Built with performance and developer experience in mind.

## 🚀 Tech Stack

- **Framework:** [Fastify v5](https://fastify.dev/) for high-performance routing.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety.
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/) for seamless database interactions.
- **Database:** [PostgreSQL](https://www.postgresql.org/) as the primary data store.
- **Cache:** [Redis](https://redis.io/) for session management and fast data access.
- **Validation:** [Zod](https://zod.dev/) for schema-based validation and type safety.
- **Documentation:** [Swagger/OpenAPI](https://swagger.io/) for automatically generated API docs.
- **Integration:** [Discord.js](https://discord.js.org/) for bot interactions and CDN management.
- **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) for easy local development.

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) v20 or higher.
- [pnpm](https://pnpm.io/) (recommended) or npm.
- [Docker](https://www.docker.com/) & Docker Compose.

## 🏁 Getting Started

### Local Development (with Docker)

The easiest way to get started is using Docker Compose, which handles PostgreSQL and Redis for you.

1.  **Clone the repo:**
    ```sh
    git clone https://github.com/eme22/kawaii-image-api.git
    cd kawaii-image-api
    ```

2.  **Start the services:**
    ```sh
    docker-compose up -d --build
    ```

3.  **Run migrations:**
    ```sh
    pnpm db:push
    ```

4.  **The API will be available at:** `http://localhost:8000`

### Local Development (Manual)

If you have PostgreSQL and Redis running locally:

1.  **Install dependencies:**
    ```sh
    pnpm install
    ```

2.  **Setup environment variables:**
    Create a `.env` file based on the default configuration.

3.  **Run in development mode:**
    ```sh
    pnpm dev
    ```

4.  **Build for production:**
    ```sh
    pnpm build
    ```

5.  **Start production server:**
    ```sh
    pnpm start
    ```

## 📚 API Documentation

Once the server is running, you can access the interactive Swagger documentation at:
`http://localhost:8000/docs`

## ⚖️ License

This project is licensed under the [ISC License](LICENSE).
