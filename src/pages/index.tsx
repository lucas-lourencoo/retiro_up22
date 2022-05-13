import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Footer, Hero, Investment, InscriptionForm } from '../styles';
import { FiArrowDown, FiCalendar, FiMapPin, FiXCircle } from 'react-icons/fi';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import Title from '../styles/components/Title';
import axios from 'axios';
import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';
import WhatsButtons from '../components/WhatsButton';
import Modal from '../components/Modal';
import toast from 'react-hot-toast';

enum SizeEnum {
  'P',
  'M',
  'G',
  'GG',
  'XGG',
}

enum PaymentEnum {
  'À vista',
  'Crédito 1x',
  'Crédito 2x',
  'Crédito 3x',
  'Crédito 4x',
}

interface IFormInput {
  name: string;
  bornDate: string;
  size: SizeEnum;
  medicine: 'Sim' | 'Não';
  allergy: 'Sim' | 'Não';
  church: 'Sim' | 'Não';
  paymentMethod: PaymentEnum;
  churchName?: string;
  medicineName?: string;
  allergyName?: string;
}

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [churchActive, setChurchActive] = useState(false);
  const [allergyActive, setAllergyActive] = useState(false);
  const [medicineActive, setMedicineActive] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formattedData = {
      ...data,
      bornDate: new Date(data.bornDate).toLocaleDateString(),
    };

    toast.loading('Enviando...');

    axios
      .post('/api/inscriptions', formattedData)
      .then(() => {
        setModalIsOpen(true);
        toast.dismiss();
        reset();
      })
      .catch((err) => {
        toast.dismiss();
        window.scroll({ top: 0, behavior: 'smooth' });
        console.error(err.response.data);
        toast.error(
          <span>
            <strong>Ocorreu um erro!</strong> <br />
            Tente novamente ou contate o Administrador do sistema
          </span>,
          {
            duration: 6000,
            style: { textAlign: 'center' },
            icon: <FiXCircle size={50} />,
          }
        );
      });
  };

  const deadline = new Date('august 26, 2022 12:00:00').getTime();

  useEffect(() => {
    setInterval(() => {
      var currentTime = new Date().getTime();
      var t = deadline - currentTime;
      setDays(Math.floor(t / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((t % (1000 * 60)) / 1000));
    }, 1000);
  }, []);

  const copiarChave = (event: any) => {
    navigator.clipboard.writeText('pix@juventudeup.com.br');
    event.target.innerText = 'COPIADO!';
  };

  const handleChurch = (event: any) => {
    if (event.target.value === 'Sim') {
      event.target.parentNode.classList.add('yes-active');
      event.target.parentNode.nextSibling.className = '';
      setChurchActive(true);
    } else {
      event.target.parentNode.classList.add('no-active');
      event.target.parentNode.previousSibling.className = '';
      setChurchActive(false);
    }
  };

  const handleAllergy = (event: any) => {
    if (event.target.value === 'Sim') {
      event.target.parentNode.classList.add('yes-active');
      event.target.parentNode.nextSibling.className = '';
      setAllergyActive(true);
    } else {
      event.target.parentNode.classList.add('no-active');
      event.target.parentNode.previousSibling.className = '';
      setAllergyActive(false);
    }
  };

  const handleMedicine = (event: any) => {
    if (event.target.value === 'Sim') {
      event.target.parentNode.classList.add('yes-active');
      event.target.parentNode.nextSibling.className = '';
      setMedicineActive(true);
    } else {
      event.target.parentNode.classList.add('no-active');
      event.target.parentNode.previousSibling.className = '';
      setMedicineActive(false);
    }
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
            Já estamos <span>contando</span> os dias, e <span>você</span>?
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
            <p>Parcelado em até 4x </p>
          </div>
          <div className='card'>
            <img src='/pix.png' alt='' />
            <h3>pix</h3>
            <p>
              A chave é: <br /> pix@juventudeup.com.br
            </p>
            <button className='copiaCola' onClick={copiarChave}>
              Copia aí
            </button>
          </div>
        </div>
      </Investment>

      <InscriptionForm>
        <Title>Formulário de inscrição</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input'>
            <label>Nome completo:</label>
            <input
              {...register('name', { required: true })}
              className={errors.name ? 'displayErros' : ''}
            />
            {errors.name && <p>Nome é obrigatório</p>}
          </div>
          <div className='input'>
            <label>Data de nascimento:</label>
            <input
              {...register('bornDate', { required: true })}
              type='date'
              className={errors.bornDate ? 'displayErros' : ''}
            />
            {errors.bornDate && <p>Data de nascimento é obrigatória</p>}
          </div>
          <div className='input'>
            <label>Tamanho da camiseta:</label>
            <select
              {...register('size', { required: true })}
              className={errors.size ? 'displayErros' : ''}
            >
              <option value=''>Escolher...</option>
              <option value='P'>P</option>
              <option value='M'>M</option>
              <option value='G'>G</option>
              <option value='GG'>GG</option>
              <option value='XGG'>XGG</option>
            </select>
            {errors.size && <p>Escolha um tamanho</p>}
          </div>
          <div className='input'>
            <label>Tem alguma alergia e/ou restrição alimentar?</label>
            <div className='buttons'>
              <button>
                Sim
                <input
                  type='radio'
                  value='Sim'
                  onClick={handleAllergy}
                  {...register('allergy', { required: true })}
                />
              </button>
              <button>
                Não
                <input
                  type='radio'
                  value='Não'
                  onClick={handleAllergy}
                  {...register('allergy', { required: true })}
                />
              </button>
            </div>
            {errors.allergy && <p>Escolha uma opção</p>}
          </div>
          {allergyActive && (
            <div className='input'>
              <label>Quais?</label>
              <input
                {...register('allergyName', { required: true })}
                className={errors.allergyName ? 'displayErros' : ''}
              />
              {errors.allergyName && <p>Obrigatório informar o nome</p>}
            </div>
          )}
          <div className='input'>
            <label>Faz uso de remédio controlado?</label>
            <div className='buttons'>
              <button>
                Sim
                <input
                  type='radio'
                  value='Sim'
                  onClick={handleMedicine}
                  {...register('medicine', { required: true })}
                />
              </button>
              <button>
                Não
                <input
                  type='radio'
                  value='Não'
                  onClick={handleMedicine}
                  {...register('medicine', { required: true })}
                />
              </button>
            </div>
            {errors.medicine && <p>Escolha uma opção</p>}
          </div>
          {medicineActive && (
            <div className='input'>
              <label>Informe o(s) medicamento(s)</label>
              <input
                {...register('medicineName', { required: true })}
                className={errors.medicineName ? 'displayErros' : ''}
              />
              {errors.medicineName && (
                <p>Obrigatório informar o(s) medicamento(s)</p>
              )}
            </div>
          )}
          <div className='input'>
            <label>Você congrega em alguma igreja?</label>
            <div className='buttons'>
              <button>
                Sim
                <input
                  type='radio'
                  value='Sim'
                  onClick={handleChurch}
                  {...register('church', { required: true })}
                />
              </button>
              <button>
                Não
                <input
                  type='radio'
                  value='Não'
                  onClick={handleChurch}
                  {...register('church', { required: true })}
                />
              </button>
            </div>
            {errors.church && <p>Escolha uma opção</p>}
          </div>
          {churchActive && (
            <div className='input'>
              <label>Qual o nome?</label>
              <input
                {...register('churchName', { required: true })}
                className={errors.churchName ? 'displayErros' : ''}
              />
              {errors.churchName && <p>Obrigatório informar o nome</p>}
            </div>
          )}
          <div className='input'>
            <label>Forma de pagamento</label>
            <select
              {...register('paymentMethod', { required: true })}
              className={errors.paymentMethod ? 'displayErros' : ''}
            >
              <option value=''>Escolher...</option>
              <option value='À vista'>À vista (Pix ou cartão)</option>
              <option value='Crédito 1x'>Cartão de crédito - À vista</option>
              <option value='Crédito 2x'>Cartão de crédito - 2x</option>
              <option value='Crédito 3x'>Cartão de crédito - 3x</option>
              <option value='Crédito 4x'>Cartão de crédito - 4x</option>
            </select>
            {errors.paymentMethod && <p>Escolha uma forma de pagamento</p>}
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </InscriptionForm>

      <Footer>
        <img src='/logo-up.png' alt='' />

        <p>Desenvolvido e produzido por Atos.Play</p>

        <img src='/logo-maju.png' alt='' />
      </Footer>
      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </main>
  );
};

export default Home;
