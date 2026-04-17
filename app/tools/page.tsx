export default function ToolsPage() {
  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "auto" }}>
      <h1>🔥 Best AI Tools (Free & Paid)</h1>

      <p>We tested the best AI tools for chat, writing, and images.</p>

      {/* 工具1 */}
      <div style={{ marginTop: 30 }}>
        <h2>🤖 AI Chat</h2>
        <p>Fast and smart AI chat for daily use.</p>

        <a
          href="你的联盟链接"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 10,
            padding: "10px 20px",
            background: "black",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          👉 Try Now
        </a>
      </div>

      {/* 工具2 */}
      <div style={{ marginTop: 40 }}>
        <h2>✍️ AI Writing Tool</h2>
        <p>Create articles, blogs, and content instantly.</p>

        <a
          href="你的联盟链接"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 10,
            padding: "10px 20px",
            background: "green",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          👉 Start Writing
        </a>
      </div>

      {/* 工具3 */}
      <div style={{ marginTop: 40 }}>
        <h2>🎨 AI Image Generator</h2>
        <p>Generate stunning images with AI.</p>

        <a
          href="你的联盟链接"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 10,
            padding: "10px 20px",
            background: "purple",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          👉 Generate Images
        </a>
      </div>
    </main>
  );
}
