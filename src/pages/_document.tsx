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
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <title>Retiro UP 22</title>
          <meta name='title' content='Retiro UP 22' />
          <meta
            name='description'
            content='O Retiro UP 22, com o tema Em espírito, Em verdade vem aí! Você não pode ficar de fora. Já estamos contando os dias, e você?'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.juventudeup.com.br/' />
          <meta property='og:title' content='Retiro UP 22' />
          <meta
            property='og:description'
            content='O Retiro UP 22, com o tema Em espírito, Em verdade vem aí! Você não pode ficar de fora. Já estamos contando os dias, e você?'
          />
          <meta property='og:image' content='/logo-foguin.png' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://www.juventudeup.com.br/'
          />
          <meta property='twitter:title' content='Retiro UP 22' />
          <meta
            property='twitter:description'
            content='O Retiro UP 22, com o tema Em espírito, Em verdade vem aí! Você não pode ficar de fora. Já estamos contando os dias, e você?'
          />
          <meta property='twitter:image' content='/logo-foguin.png' />
          <link rel='shortcut icon' href='/logo-foguin.png' type='image/png' />
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
          <div id={'globalLoader'}>
            <div className='splash'>
              <img src='/logo-foguin.png' alt='' />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
