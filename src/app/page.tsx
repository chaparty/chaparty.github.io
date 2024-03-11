import Card from '@/components/Card';
import ProductLinkGenerator from '@/domain/ProductLinkGenerator';
import Repository from '@/repo/repo';
import Script from 'next/script';

const repo = new Repository();
const allData = async () => await repo.GetAllItemsJson();
const productLinkGenerator = new ProductLinkGenerator();

export default async function Home() {
  var items = await allData();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Script id="gtag-script" async src="https://www.googletagmanager.com/gtag/js?id=G-6Y843D020P" />
      <Script id="gtag-data">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){
          window.dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'G-6Y843D020P');`}
      </Script>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2.5">
        {items.map((item) => (
          <div key={item.id}>
            <Card name={item.name} thumbnailImageUrl={item.imageUrls[0]} price={item.price.toString()} currency={"£"}
              url={productLinkGenerator.CreateProductLink(item.category,item.name)} productUrl={item.externalUrl}></Card>       
          </div>
        ))}
      </div>
    </main>
  )
}
