import React from 'react';
import BurgerMenu from './Components/MenuBurger/MenuBurger';
import Navbar from './Components/Navbar/Navbar';

const Accueil = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Clean up this component by removing the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleWindowResize);
  }, 
  []);

  return (
    <div>
        {windowWidth > 768 ? <Navbar /> : <BurgerMenu />}
      <h1>Bienvenue sur notre site!</h1>
      <p>Ceci est la page d'accueil.</p>
    </div>
  );
};

export default Accueil;
