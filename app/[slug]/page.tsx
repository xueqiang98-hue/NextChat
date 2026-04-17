const pages = [
  {
    slug: "free-ai-chat-no-login",
    title: "Free AI Chat No Login",
    desc: "Use AI chat without login, fast and free.",
  },
  {
    slug: "best-ai-tools-2026",
    title: "Best AI Tools 2026",
    desc: "Top AI tools for chat, writing, and images.",
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const page = pages.find((p) => p.slug === params.slug);

  if (!page) {
    return <div>Not Found</div>;
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>{page.title}</h1>
      <p>{page.desc}</p>

      <a href="/tools">👉 Explore AI Tools</a>
    </main>
  );
}
