/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static export to /out :contentReference[oaicite:2]{index=2}
  images: { unoptimized: true }, // required if using next/image :contentReference[oaicite:3]{index=3}
  trailingSlash: true,       // optional but helps GitHub Pages resolve paths :contentReference[oaicite:4]{index=4}
};

module.exports = nextConfig;
