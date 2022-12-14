import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    // This <Head> element is to be used SOLELY for data you would like loaded on every single page.
    // See  https://nextjs.org/docs/advanced-features/custom-document
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    {/* recognize manifest */}
                    {/* <link rel="manifest" href="/manifest.json" /> */}

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />
                    {/* <script
                        src="node_modules/pouchdb/dist/pouchdb.min.js"
                        async
                    ></script> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
