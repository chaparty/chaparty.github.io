import ProductLinkGenerator from '@/domain/ProductLinkGenerator';
import UrlCleaner from '@/domain/UrlCleaner';
import Repository from '@/repo/repo';
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const repo = new Repository();
    const productLinkGenerator = new ProductLinkGenerator();
    const allData = async () => await repo.GetAllItemsJson();

    const gatheredResponses = await allData();

    const urls = gatheredResponses.map((post) => ({
        url: productLinkGenerator.CreateProductLink(post.category, post.name)
    }));

    const sitemap = [
        {
            url: 'https://www.chaparty.co.uk',
            lastModified: new Date(),
        },
    ];

    urls.forEach(x=> {
        sitemap.push({
            url: `https://www.chaparty.co.uk${x.url}`,
            lastModified: new Date(),
        })
    });

    return sitemap
}