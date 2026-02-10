import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: basePath
};

export default withNextIntl(nextConfig);
