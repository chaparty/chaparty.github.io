
import UrlCleaner from "@/domain/UrlCleaner";
import Repository from "@/repo/repo";
import ProductLinkGenerator from "@/domain/ProductLinkGenerator";
import CardDetailed from "@/components/CardDetailed";

const urlCleaner = new UrlCleaner();
const repo = new Repository();
const productLinkGenerator = new ProductLinkGenerator();

const allData = async () => await repo.GetAllItemsJson();

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { product: string, category: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route paramss
    const gatheredResponses = await allData();

  const getProduct = gatheredResponses.find(
    (x) => urlCleaner.Clean(x.name) === params.product
  );
    return {
      title: `Chaparty | Buy ${getProduct?.name} ${params.category}`,
      description: `Buy ${getProduct?.name} in the form of ${params.category} and many more`
    }
  }

export async function generateStaticParams() {
  const gatheredResponses = await allData();

  return gatheredResponses.map((post) => ({
    category: urlCleaner.Clean(post.category),
    product: urlCleaner.Clean(post.name),
  }));
}

export default async function Product({
  params,
}: {
  params: { category: string; product: string };
}) {
  const gatheredResponses = await allData();

  const getProduct = gatheredResponses.find(
    (x) => urlCleaner.Clean(x.name) === params.product
  );

  if(getProduct === undefined) {
    return;
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="container my-4">
      <div className="grid grid-cols-11 md:grid-cols-1 gap-4 mt-2.5">
          <div className="col" key={getProduct.id}>
            <CardDetailed description={getProduct.description} name={getProduct.name} thumbnailImageUrl={getProduct.imageUrls[0]} price={getProduct.price} currency={"£"}
            url={productLinkGenerator.CreateProductLink(getProduct.category,getProduct.name)} productUrl={getProduct.externalUrl}></CardDetailed>       
          </div>
      </div>
    </div>
  </main>
  );
}
