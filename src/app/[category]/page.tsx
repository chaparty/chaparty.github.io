import Card from "@/components/Card";
import ProductLinkGenerator from "@/domain/ProductLinkGenerator";
import UrlCleaner from "@/domain/UrlCleaner";
import Repository from '@/repo/repo';
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { category: string }
}

const urlCleaner = new UrlCleaner();
const repo = new Repository();
const productLinkGenerator = new ProductLinkGenerator();
const allData = async () => await repo.GetAllItemsJson();

export async function generateStaticParams() {
  const gatheredResponses = await allData();

  return gatheredResponses.map((post) => ({
    category: urlCleaner.Clean(post.category),
  }));
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const category = params.category;
    return {
      title: `Chaparty | Buy ${category} of funny indian sayings`,
      description: `Buy hilarious Indian sayings in the form of ${category} and many more`
    }
  }

export default async function Brand({ params }: { params: { category: string } }) {
  const gatheredResponses = await allData();

  const getProducts = gatheredResponses.filter(
    (x) => urlCleaner.Clean(x.category) === params.category
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h1>{getProducts[0]?.category || params.category}</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2.5">
          {getProducts.map((item) => (
            <div className="col" key={item.id}>
              <Card name={item.name} thumbnailImageUrl={item.imageUrls[0]} price={item.price} currency={"£"}
              url={productLinkGenerator.CreateProductLink(item.category,item.name)} productUrl={item.externalUrl}></Card>       
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
