//next.config.mjs
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import { withMDX } from 'next-mdx-remote/serialize';

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});

/** @type {import('next').NextConfig} */

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

