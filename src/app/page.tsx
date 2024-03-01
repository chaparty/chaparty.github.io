import Card from '@/components/Card';
import SideshowRepo from '@/repo/repo';
import Head from 'next/head';
import Script from 'next/script';

const sideshowRepo = new SideshowRepo();
const allData = async () => await sideshowRepo.GetAllItems();

export default async function Home() {
  var items = await allData();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <img src="/banner.png" style={{ height: "auto", width: "100%" }} />
       <Head>
        <title>Chaparty.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6Y843D020P" />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){
          window.dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'G-6Y843D020P');`}
      </Script>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2.5">
        {items.data.searchResults.results.map((item) => (
          <div key={item.work.id}>
            <Card name={item.work.title} thumbnailImageUrl={item.inventoryItem.previewSet.previews[1].url} price={item.inventoryItem.price.amount.toString()} currency={"£"}
              url={item.inventoryItem.productPageUrl} productUrl={item.inventoryItem.productPageUrl}></Card>       
          </div>
        ))}
      </div>
    </main>
  )
}
