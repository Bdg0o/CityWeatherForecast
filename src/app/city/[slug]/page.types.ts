import { cities } from "@/constants";

export type PageProps = {
  params: { slug: keyof typeof cities };
};
