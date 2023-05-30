export type WeatherData = {
  current: {
    temp: number;
  }
  daily: {
    dt: number;
    temp: {
      day: number;
    };
  }[];
}
