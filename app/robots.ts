import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.APP_ENV === "production") {
    return {
      rules: [
        {
          userAgent: "Bytedance",
          disallow: "/",
        },
        {
          userAgent: "Bytespider",
          disallow: "/",
        },
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
      ],
    };
  }

  // No bot access for non-prod environments
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
