const baseUrl = "https://www.9solutions.co";

function generateSiteMap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls
       .map((item) => {
         return `
       <url>
           <loc>${item.url}</loc>
           <lastmod>${item.lastModified}</lastmod>
           <priority>${item.priority}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const urls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/term-of-use`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(urls);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
