import { cities } from "@/constants";

export type CityPageProps = {
  slug: keyof typeof cities;
}

export type PageProps = {
  params: { slug: CityPageProps['slug'] };
};
