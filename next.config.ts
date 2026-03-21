import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid native lightningcss binary resolution issues on Linux CI/build hosts.
  experimental: {
    useLightningcss: false,
  },
};

export default withPayload(nextConfig);
