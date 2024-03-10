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
const allData = async () => await repo.GetAllItems();

export async function generateStaticParams() {
  const gatheredResponses = await allData();

  return gatheredResponses.data.searchResults.results.map((post) => ({
    category: urlCleaner.Clean(post.inventoryItem.gaCategory),
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

  const getProducts = gatheredResponses.data.searchResults.results.filter(
    (x) => urlCleaner.Clean(x.inventoryItem.gaCategory) === params.category
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h1>{getProducts[0]?.inventoryItem.gaCategory || params.category}</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2.5">
          {getProducts.map((item) => (
            <div className="col" key={item.work.id}>
              <Card name={item.work.title} thumbnailImageUrl={item.inventoryItem.previewSet.previews[1].url} price={item.inventoryItem.price.amount.toString()} currency={"£"}
              url={productLinkGenerator.CreateProductLink(item.inventoryItem.gaCategory,item.work.title)} productUrl={item.inventoryItem.productPageUrl}></Card>       
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
