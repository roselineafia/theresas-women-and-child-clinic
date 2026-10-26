import { siteConfig } from "@/data/site-config";

export function GET() {
  const body = `User-Agent: *\nAllow: /\n\nSitemap: ${siteConfig.url}/sitemap.xml\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
