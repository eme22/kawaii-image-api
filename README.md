# Waifu Api ![A](public/assets/img/waifu.png)

Fast created api for serving SFW and NSFW images backed up from the discord CDN. Generated from the **Building REST API with Express, TypeScript** blog post series

## Build from source

1. Clone the repo

   ```sh
   git clone git@github.com:rsbh/express-typescript.git
   cd express-typescript
   ```

2. Install dependencies.

   ```sh
   npm install
   ```

3. Build the production server.

   ```sh
   npm build
   ```

4. Run the server.
   ```sh
   npm start
   ```

## Build Docker image locally

```sh
docker build -t express-typescript .
```

## Run tests

```sh
npm test
```
