import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(value);
}

export function generateMetaTags(title: string, description: string) {
  return {
    title: `${title} | Marka Aydınlatma`,
    description,
    openGraph: {
      title,
      description,
    },
  };
}