<p style={{color: "red"}}>
Free users: 10 messages per day. Upgrade for unlimited access.
</p>
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}
<h1 style={{color: "red"}}>TEST SUCCESS</h1>
