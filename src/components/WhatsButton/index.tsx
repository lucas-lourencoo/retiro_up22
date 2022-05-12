import { FaWhatsapp } from 'react-icons/fa';
import { Button } from './styles';

const WhatsButtons = () => {
  return (
    <Button
      href='https://api.whatsapp.com/send?phone=556792234811&text=Olá!%20Queria%20mais%20informações%20sobre%20o%20retiro.'
      target='__blank'
    >
      <FaWhatsapp />
    </Button>
  );
};

export default WhatsButtons;
