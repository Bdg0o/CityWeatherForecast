import { Suspense } from "react";
import { getLocalWeather } from "@/api/weather";
import { cities } from "@/constants";
import City, { CityLoading } from "@/components/City";
import PopOver from "@/components/PopOver/PopOver";
import { CityPageProps, PageProps } from "./page.types";

const CityPage = async ({ slug }: CityPageProps) => {
  const cityData = cities[slug];
  const data = await getLocalWeather(cityData.lat, cityData.lng);

  return <City name={cityData.name} weatherData={data} />;
};

export default function Page({ params: { slug } }: PageProps) {
  return (
    <PopOver>
      <Suspense fallback={<CityLoading />}>
        {/* @ts-expect-error Async Server Component. Cf: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components */}
        <CityPage slug={slug} />
      </Suspense>
    </PopOver>
  );
}

export async function generateStaticParams() {
  return Object.keys(cities).map((slug) => ({
    slug: slug,
  }));
}
