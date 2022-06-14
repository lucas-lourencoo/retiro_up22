import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HeaderLayout } from './styles';
import MenuModal from '../MenuModal';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.scrollTop > 20
        ? setIsActive(true)
        : setIsActive(false);
    };

    window.addEventListener('scroll', onScroll);
  });

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <HeaderLayout isActive={isActive}>
      <div className='menu'>
        <img src='/logo-foguin.png' alt='Logo Enjoy' />

        <nav>
          <ul>
            <li className='navItem'>
              <a className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a className='navLink'>Investimento</a>
            </li>
            <li className='navItem'>
              <a className='navLinkButton'>Inscrever-se</a>
            </li>
          </ul>
        </nav>

        <button onClick={openMenu}>
          <FiMenu strokeWidth={3} color='var(--black)' />
        </button>
      </div>

      <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </HeaderLayout>
  );
};

export default Header;
