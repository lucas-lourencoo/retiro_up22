import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import ButtonUp from './styles';

export default function BackToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    });
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ButtonUp showButton={showScroll}>
      <FaArrowCircleUp onClick={scrollTop} style={{ height: 48 }} />
    </ButtonUp>
  );
}
