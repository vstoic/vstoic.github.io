// import 'home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
// import LogoHome from '../../Logo/LogoHome';
import Logo from '../../../assets/images/logo.png';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
// import Canvas from './Canvas/Canvas';
// import Canvas from '../../Canvas/Canvas';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const firstName = ' Victor '.split('');
  const lastName = 'Cheng,'.split('');
  const jobArray1 = 'Software '.split('');
  const jobArray2 = 'Engineer.'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className='home-title'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstName}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastName}
              idx={23}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray1}
              idx={30}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={39}
            />
          </h1>
          <h2> Frontend Engineer / FullStack Engineer </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="solid-logo" />
        </div>
      </div>
      {/* <Loader type="ball-clip-rotate-multiple" /> */}
      {/* <Canvas /> */}
    </>
  );
};

export default Home;
