import Head from 'next/head';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Container } from '../../styles/Link';

const Link = () => {
  return (
    <>
      <Head>
        <title>Juventude UP</title>
      </Head>

      <Container>
        <div className='section padding-top-50 padding-bottom-50 center-align'>
          <a href='#'>
            <img className='avy' src='/upjuventude.png' />
          </a>

          <h1 className='padding-top-15'>
            <b>UP Juventude</b>
          </h1>

          <h2 className='padding-top-15'>
            “Viva todos os dias da sua vida, por causa daquele DIA!” 1 Ts 5:23
          </h2>

          <div>
            <p className='padding-top-50'>
              <a
                href='https://www.instagram.com/upjuventudee/'
                target='_blank'
                className='social-spacing'
              >
                <FaInstagram size={30} />
              </a>
              <a
                href='https://www.youtube.com/channel/UCfhx86hjbpC2jFV0nohZxFw'
                target='_blank'
                className='social-spacing'
              >
                <FaYoutube size={30} />
              </a>
              <a
                href='https://www.facebook.com/m.atosdejustica'
                target='_blank'
                className='social-spacing'
              >
                <FaFacebookSquare size={30} />
              </a>
            </p>
          </div>

          <div className='clear'></div>
        </div>

        <div className='section padding-bottom-50 center-align'>
          <a
            href='https://drive.google.com/drive/folders/1x7OjAI_hPGH_Y6VCIhGxWvX6ynEaQ3LR?usp=sharing'
            target='_blank'
          >
            <div className='button' id='green'>
              <p className='white'>Fotos dos cultos</p>
            </div>
          </a>
          <a href='https://www.instagram.com/upjuventudee/' target='_blank'>
            <div className='button' id='pink'>
              <p className='white'>Instagram UP Juventude</p>
            </div>
          </a>
          <a href='/links/pg/'>
            <div className='button'>
              <p className='white'>PG'S - Pequenos Grupos</p>
            </div>
          </a>
          <a
            href='https://www.youtube.com/playlist?list=PLY3UcBuFaEo25VONXmxXhy31dRjwMmLZO'
            target='_blank'
          >
            <div className='button'>
              <p className='white'>Ministrações UP</p>
            </div>
          </a>
          <a href='https://juventudeup.com.br/' target='_blank'>
            <div className='button'>
              <p className='white'>Visite o nosso site</p>
            </div>
          </a>
          <div className='clear'></div>
        </div>

        <div className='section padding-bottom-100 center-align'>
          <small className='light-grey'>
            &copy; <b>Atos de Justiça - 2021</b>
          </small>
        </div>
      </Container>
    </>
  );
};

export default Link;
