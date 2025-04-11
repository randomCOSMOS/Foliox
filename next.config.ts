import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPayload(nextConfig);
