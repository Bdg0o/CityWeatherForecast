# City weather forecast

This project allows you to check the weather forecast for various cities around the world.

It's powered by [Next.js](https://nextjs.org/) as it is the new standard way to start a React project. It's using the recently added app directory to take care of the routing between pages (I took the opportunity to try this new way of architecturing a Next.js app).

An online SSR version of the app is available here: [https://city-weather-forecast-five.vercel.app/](https://city-weather-forecast-five.vercel.app/).

A note about styling in the app: I used vanilla CSS as I didn't want to use the default CSS modules method of Next.js. It seemed to me that the size of the application didn't require it, therefore I stuck with a BEM-like notation to structure the CSS.

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

The project can be deployed via Docker using the included files.

Build the docker container :

```bash
docker build --tag 'cwf' .
```

Run the container :

```bash
docker run -p 3000:3000 'cwf'
```
