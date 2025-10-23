import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/phone_dewlight',
        assetPrefix: '/phone_dewlight/',
         images: {
        unoptimized: true,
    },
};

export default nextConfig;
