import { getLocalWeather } from "@/api/weather";
import { cities } from "@/constants";
import City from "@/components/City";
import { PageProps } from "./page.types";

export default async function Page({ params: { slug } }: PageProps) {
  const cityData = cities[slug];
  const data = await getLocalWeather(cityData.lat, cityData.lng);

  return <City name={cityData.name} weatherData={data} />;
}

export async function generateStaticParams() {
  return Object.keys(cities).map((slug) => ({
    slug: slug,
  }));
}
