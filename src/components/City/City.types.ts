export type CityProps = {
  name: string;
  weatherData: {
    current: {
      temp: number;
    }
    daily: {
      dt: number;
      temp: {
        day: number;
      };
    }[];
  };
}
