import os from "os";
import { CapacitorConfig } from "@capacitor/cli";

const DEV = Boolean(process.env.NODE_ENV === "development");

const port = 5173;
const ip = Object.values(os.networkInterfaces())
  .flatMap((n) => n ?? [])
  .filter((d) => d.family === "IPv4" && (d.address.startsWith("10.") || d.address.startsWith("192.")))?.[0]?.address;

const url = ip ? `http://${ip}:${port}/` : undefined;

console.log("capacitor URL:", url, "\n");

const config: CapacitorConfig = {
  appId: "dev.ibgrav.bestmoments",
  appName: "best-moments-app",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    CapacitorCookies: {
      enabled: true
    },
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

if (DEV && url) {
  config.server = { url };
}

export default config;
