import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <h1 style={{ color: "red" }}>TEST SUCCESS</h1>

      <p style={{ color: "red" }}>
        Free users: 10 messages per day. Upgrade for unlimited access.
      </p>

      <Home />

      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}
