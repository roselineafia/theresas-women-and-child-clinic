import { siteConfig } from "@/data/site-config";

const routes = ["", "/about", "/womens-health", "/childrens-health", "/our-team", "/patient-guide", "/kids-corner", "/contact"];

export function GET() {
  const urls = routes
    .map((route) => {
      const loc = `${siteConfig.url}${route || "/"}`;
      return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
