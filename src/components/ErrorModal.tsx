import { FiXCircle } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { Confirmation } from './Modal/styles';

interface ModalProps {
  errorIsOpen: boolean;
  setIsOpenError: (value: boolean) => void;
}

const ErrorModal = ({ errorIsOpen, setIsOpenError }: ModalProps) => {
  const closeModal = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpenError(false);
  };

  return (
    <ReactModal
      isOpen={errorIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          backgroundColor: 'var(--white)',
          borderRadius: 10,
          margin: '5% auto',
          position: 'absolute',
          maxWidth: '768px',
          width: '90%',
          maxHeight: '70vh',
          inset: 0,
        },
        overlay: {
          backgroundColor: '#0000008d',
          zIndex: 1000,
        },
      }}
    >
      <Confirmation>
        <FiXCircle strokeWidth={2.5} size={160} color='var(--red)' />
        <h1>Bah tchê, algo deu errado!</h1>
        <p>Sua inscrição teve um erro, tente novamente.</p>
        <p style={{ fontSize: 16 }}>
          Se o erro persistir, entre em contato conosco
        </p>

        <button onClick={closeModal}>De boa! 😔</button>
      </Confirmation>
    </ReactModal>
  );
};

export default ErrorModal;
