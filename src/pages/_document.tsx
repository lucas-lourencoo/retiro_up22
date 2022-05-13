import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: sheet.getStyleElement(),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='robots' content='index, follow' />
          <meta
            name='description'
            content='Já estamos contando as horas, e você?'
          />
          <meta property='og:url' content='https://www.juventudeup.com.br' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Retiro UP 22' />
          <meta property='”og:site_name”' content='Retiro UP 22' />
          <meta
            property='og:description'
            content='Já estamos contando as horas, e você?'
          />
          <meta property='og:image' content='/logo.png' />
          <link rel='icon' href='/logo.png' />
          <link rel='canonical' href='https://www.juventudeup.com.br/' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
