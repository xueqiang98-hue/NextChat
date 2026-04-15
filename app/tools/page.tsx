export default function Tools() {
  return (
    <main
      style={{
        padding: 40,
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>🔥 Best AI Tools to Make Money (2026)</h1>

      <p>
        Explore the best AI tools for chatting, writing, designing, and making
        money online.
      </p>

      <hr style={{ margin: "30px 0" }} />

      {/* Chat工具 */}
      <h2>🤖 AI Chat Tools</h2>

      <p>
        Use AI chat tools for conversation, coding, research, and daily tasks.
      </p>

      <a
        href="https://chat.openai.com"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("#000")}
      >
        👉 Try ChatGPT (Free)
      </a>

      <hr style={{ margin: "40px 0" }} />

      {/* 写作工具 */}
      <h2>✍️ AI Writing Tools</h2>

      <p>
        Generate blog posts, ads, emails, and SEO content automatically.
      </p>

      <a
        href="https://www.jasper.ai"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("#444")}
      >
        👉 Try AI Writing Tool
      </a>

      <hr style={{ margin: "40px 0" }} />

      {/* 绘图工具 */}
      <h2>🎨 AI Image Generator</h2>

      <p>
        Create stunning AI images, logos, and artwork in seconds.
      </p>

      <a
        href="https://www.midjourney.com"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("#6a0dad")}
      >
        👉 Generate AI Images
      </a>

      <hr style={{ margin: "40px 0" }} />

      {/* 联盟平台 */}
      <h2>💰 Make Money with AI (Affiliate Programs)</h2>

      <p>
        Join affiliate platforms and earn commissions by promoting AI tools.
      </p>

      <a
        href="https://partnerstack.com"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("green")}
      >
        👉 Join PartnerStack
      </a>

      <br /><br />

      <a
        href="https://impact.com"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("blue")}
      >
        👉 Join Impact
      </a>

      <br /><br />

      <a
        href="https://firstpromoter.com"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle("orange")}
      >
        👉 Join FirstPromoter
      </a>

      <hr style={{ margin: "40px 0" }} />

      {/* CTA */}
      <h2>🚀 Start Using AI Today</h2>

      <p>
        Millions of people are already using AI tools to save time and make
        money online.
      </p>

      <a
        href="https://chat.openai.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "16px 28px",
          background: "red",
          color: "white",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        🔥 Try AI Now — Free
      </a>
    </main>
  );
}

/* 按钮样式函数 */
function btnStyle(bg: string) {
  return {
    display: "inline-block",
    padding: "12px 22px",
    background: bg,
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    marginTop: 10,
    fontWeight: "bold",
  };
}
