import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class CustomDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}