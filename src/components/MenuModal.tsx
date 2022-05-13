import ReactModal from 'react-modal';
import { MenuCel } from './Header/styles';

interface ModalProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const MenuModal = ({ isMenuOpen, setIsMenuOpen }: ModalProps) => {
  const closeModal = () => {
    setIsMenuOpen(false);
  };

  return (
    <ReactModal
      isOpen={isMenuOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          backgroundColor: 'var(--white)',
          borderRadius: 0,
          marginLeft: '40%',
          position: 'absolute',
          width: '60%',
          maxHeight: '100vh',
          padding: '.8rem',
          inset: 0,
        },
        overlay: {
          backgroundColor: '#0000008d',
          zIndex: 1000,
          right: 0,
        },
      }}
    >
      <MenuCel>
        <ul>
          <li className='navItem'>
            <a className='navLink' onClick={closeModal}>
              Home
            </a>
          </li>
          <li className='navItem'>
            <a className='navLink' onClick={closeModal}>
              Investimento
            </a>
          </li>
          <li className='navItem'>
            <a className='navLinkButton' onClick={closeModal}>
              Inscreva-se agora!
            </a>
          </li>
        </ul>
      </MenuCel>
    </ReactModal>
  );
};

export default MenuModal;
