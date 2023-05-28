# City weather forecast

This is a [Next.js](https://nextjs.org/) project allowing you to consult the weather forecast of various cities around the world.

## Development

To get started, please install the project dependencies allowing your IDE to work properly :

```bash
npm install
```

After that, launch the development server via :

```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Dependencies

To add a new dependencie, please make sure to stop the container and do :

```bash
npm install xxx@x.x.x
docker compose build
docker compose up
```

## Production

Build the docker container :

```bash
docker build --tag 'cwf' .
```

Run the container :

```bash
docker run -p 3000:3000 'cwf'
```
