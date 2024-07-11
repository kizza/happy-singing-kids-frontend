import Home from "@/app/pages/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delightfully different and funny tunes you’ll love to sing!",
  description: "Happy Singing Kids brings singing and laughter with unique catchy songs, dynamic live shows, workshops and fun-loving videos.",
  openGraph: {
    type: 'website',
    images: [
      {
        url: "https://happysingingkids.com/open-graph.jpg",
        secureUrl: "https://happysingingkids.com/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "The team at Happy Singing Kids",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: {
      url: "https://happysingingkids.com/open-graph.jpg",
      alt: "The team at Happy Singing Kids",
    }
  },
};

export default function HomeRoute() {
  return <Home />
}
