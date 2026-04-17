export default function sitemap() {
  const baseUrl = "https://www.shgjip.com";

  const dynamicPages = [
    "free-ai-chat-no-login",
    "best-ai-tools-2026",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...dynamicPages.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
