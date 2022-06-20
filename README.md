![A](public/assets/img/waifu.png)
# Kawaii Api (https://kawaii.up.railway.app/)

Fast created api for serving SFW and NSFW images backed up from the discord CDN. Generated from the **Building REST API with Express, TypeScript** blog post series

## Build from source

1. Clone the repo

   ```sh
   git clone https://github.com/eme22/kawaii-image-api.git
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
