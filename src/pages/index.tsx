import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Footer, Hero, Investment } from '../styles';
import { FiArrowDown, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import Title from '../styles/components/Title';
import axios from 'axios';
import Head from 'next/head';
import WhatsButtons from '../components/WhatsButton';
import ErrorModal from '../components/ErrorModal';
import Modal from '../components/Modal';

const Home = () => {
  const [displayErrors, setDisplayErrors] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorIsOpen, setIsOpenError] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date('august 26, 2022 12:00:00').getTime();

  useEffect(() => {
    var x = setInterval(() => {
      var currentTime = new Date().getTime();
      var t = deadline - currentTime;
      setDays(Math.floor(t / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((t % (1000 * 60)) / 1000));
    }, 1000);
  }, []);

  const copiarChave = (event: any) => {
    navigator.clipboard.writeText('gfhgian@gmail.com');
    event.target.innerText = 'COPIADO!';
  };

  const sendData = (event: any) => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      setDisplayErrors(true);
      window.scroll({ top: 4100, behavior: 'smooth' });
      return;
    }

    if (form.shirt.value === '' || form.payment.value === '') {
      setDisplayErrors(true);
      window.scroll({ top: 4100, behavior: 'smooth' });
      return;
    }

    const data = {
      name: form.name.value,
      email: form.email.value,
      celphone: form.celphone.value,
      whats: form.whats.checked,
      age: form.age.value,
      responsibleName: form.responsibleName?.value,
      address: form.address.value,
      district: form.district.value,
      complement: form.complement.value,
      allergy: form.allergy.value,
      allergyComplement: form.allergyComplement?.value,
      medicine: form.medicine.value,
      medicineComplement: form.medicineComplement?.value,
      church: form.church.value,
      churchComplement: form.churchComplement?.value,
      pastor: form.pastor?.value,
      bus: form.bus.value,
      covid: form.covid.value,
      vacine: form.vacine.value,
      shirt: form.shirt.value,
      payment: form.payment.value,
    };

    axios
      .post('/api/inscriptions', data)
      .then((res) => {
        form.reset();
        setModalIsOpen(true);
      })
      .catch((err) => {
        console.log(err.data);
        setIsOpenError(true);
      });
  };

  return (
    <main>
      <Head>
        <title>Retiro UP 21</title>
      </Head>

      <Header />

      <WhatsButtons />

      <Hero id='home'>
        <div className='left'>
          <img src='/logo-retiro.png' alt='Logo retiro' />

          <div className='infos'>
            <p>
              <FiCalendar size={30} />
              <strong>26</strong>AGO &gt;&gt; <strong> 28</strong>AGO
            </p>
            <p>
              <FiMapPin size={30} />
              Chácara Aprisco
            </p>
          </div>
        </div>

        <div className='right'>
          <h1>
            Já <span>estamos</span> <br /> contando os <br />
            <span>dias</span>, e <span>você</span>?
          </h1>

          <div className='counterBox'>
            <div className='item'>
              <div className='itemTime'>
                <span>{days}</span>
              </div>
              <p>dias</p>
            </div>
            <div className='item'>
              <div className='itemTime'>
                <span>{hours}</span>
              </div>
              <p>horas</p>
            </div>
            <div className='item'>
              <div className='itemTime'>
                <span>{minutes}</span>
              </div>
              <p>minutos</p>
            </div>
            <div className='item'>
              <div className='itemTime'>
                <span>{seconds}</span>
              </div>
              <p>segundos</p>
            </div>
          </div>
        </div>

        <FiArrowDown
          color='var(--black)'
          className='arrowDown'
          size={60}
          strokeWidth={3}
        />
      </Hero>

      <Investment id='investiment'>
        <Title>
          Quer participar? Se <span>liga</span> só 👇
        </Title>

        <div className='cards'>
          <div className='card'>
            <FaMoneyBillWave color='#f1f0f5' fontSize={90} />
            <h3>À VISTA</h3>
            <p>Pode ser no dinheiro ou no cartão de débito 🤑</p>
          </div>
          <div className='card'>
            <FaCreditCard color='#f1f0f5' fontSize={90} />
            <h3>Cartão de crédito</h3>
            <p>Parcelado em até 3x (Sim, é sem juros 😉) </p>
          </div>
          <div className='card'>
            <img src='/pix.png' alt='' />
            <h3>pix</h3>
            <p>
              A chave é: <br /> gfhgian@gmail.com
            </p>
            <button className='copiaCola' onClick={copiarChave}>
              Copia aí
            </button>
          </div>
        </div>
      </Investment>

      <Footer>
        <img src='/logo-up.png' alt='' />

        <p>Desenvolvido e produzido por Atos.Play</p>

        <img src='/logo-maju.png' alt='' />
      </Footer>

      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <ErrorModal errorIsOpen={errorIsOpen} setIsOpenError={setIsOpenError} />
    </main>
  );
};

export default Home;
