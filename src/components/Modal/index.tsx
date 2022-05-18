import { FiCheckCircle } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { Confirmation } from './styles';

interface ModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

const Modal = ({ modalIsOpen, setModalIsOpen }: ModalProps) => {
  const closeModal = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setModalIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
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
        <FiCheckCircle strokeWidth={2.5} size={160} />
        <h1>Por aqui, tudo certo!</h1>
        <p>Sua inscrição foi recebida com sucesso.</p>

        <a href='https://pag.ae/7YhbJJ9sQ' target='__blank'>
          Quer pagar já? Clica aqui
        </a>
        <button onClick={closeModal}>TMJ! ✌🏻</button>
      </Confirmation>
    </ReactModal>
  );
};

export default Modal;
