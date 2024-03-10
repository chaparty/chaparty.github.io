
import UrlCleaner from "@/domain/UrlCleaner";
import Repository from "@/repo/repo";
import ProductLinkGenerator from "@/domain/ProductLinkGenerator";
import CardDetailed from "@/components/CardDetailed";

const urlCleaner = new UrlCleaner();
const repo = new Repository();
const productLinkGenerator = new ProductLinkGenerator();

const allData = async () => await repo.GetAllItems();

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { product: string, category: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const product = params.product;
    const gatheredResponses = await allData();

  const getProduct = gatheredResponses.data.searchResults.results.find(
    (x) => urlCleaner.Clean(x.work.title) === params.product
  );
    return {
      title: `Chaparty | Buy ${getProduct?.work.title}`,
      description: `Buy ${getProduct?.work.title} in the form of ${params.category} and many more`
    }
  }


export async function generateStaticParams() {
  const gatheredResponses = await allData();

  return gatheredResponses.data.searchResults.results.map((post) => ({
    category: urlCleaner.Clean(post.inventoryItem.gaCategory),
    product: urlCleaner.Clean(post.work.title),
  }));
}

export default async function Product({
  params,
}: {
  params: { category: string; product: string };
}) {
  const gatheredResponses = await allData();

  const getProduct = gatheredResponses.data.searchResults.results.find(
    (x) => urlCleaner.Clean(x.work.title) === params.product
  );

  if(getProduct === undefined) {
    return;
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="container my-4">
      <div className="grid grid-cols-11 md:grid-cols-1 gap-4 mt-2.5">
          <div className="col" key={getProduct.work.id}>
            <CardDetailed description={getProduct.inventoryItem.description} name={getProduct.work.title} thumbnailImageUrl={getProduct.inventoryItem.previewSet.previews[1].url} price={getProduct.inventoryItem.price.amount.toString()} currency={"£"}
            url={productLinkGenerator.CreateProductLink(getProduct.inventoryItem.gaCategory,getProduct.work.title)} productUrl={getProduct.inventoryItem.productPageUrl}></CardDetailed>       
          </div>
      </div>
    </div>
  </main>
  );
}
