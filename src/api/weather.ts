import { weatherApiKey } from "@/constants";
import { WeatherData } from "./weather.types";

export const getLocalWeather = async (lat: number, lng: number): Promise<WeatherData> => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric&exclude=minutely,hourly,alerts`, {
        next: { revalidate: 30 },
    });
    const data = await response.json();
    return data;
}
