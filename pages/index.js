import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
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

      <main>
        <img src="/banner.png" style={{height: "auto", width:"100%"}}/>

        <iframe style={{border:0}} src="https://www.redbubble.com/people/chaparty/external-portfolio?count=20" width={"100%"} height={"600px"}>

        </iframe>

      </main>



      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
