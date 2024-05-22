const fs = require('fs');
const path = require('path');
const xmlBuilder = require('xmlbuilder');

function createSitemap(pages) {
  const urlset = xmlBuilder.create('urlset', { encoding: 'UTF-8' });
  urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
  urlset.att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
  urlset.att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

  pages.forEach((page) => {
    const url = urlset.ele('url');
    url.ele('loc', `https://ckjhk.com${page}`);
    url.ele('lastmod', '2024-03-11T03:38:48+00:00'); // 替换为动态日期
    url.ele('priority', '0.80'); // 可以根据需要设置优先级
  });

  return urlset.end({ pretty: true });
}

function getPages() {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const files = fs.readdirSync(pagesDir);
  return files.map((file) => `/hk/${file.replace('.vue', '')}`);
}

function writeSitemapToFile() {
  const sitemapContent = createSitemap(getPages());
  fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapContent);
}

writeSitemapToFile();