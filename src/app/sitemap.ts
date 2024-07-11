import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://happysingingkids.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://happysingingkids.com/edinburgh-festival-fringe-2024/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://happysingingkids.com/uh-oh-spaghetti-oh/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://happysingingkids.com/about/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://happysingingkids.com/contact/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ]
}
