import React from 'react';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main(props) {
    const headerStyle = () => {
      if(props.loggedIn) {
        return ''
      } else {
        return 'header_is-dark'
      }
    };
    
    const HeaderBackground = headerStyle();

    return (
      <>
        <Header HeaderBackground={HeaderBackground} loggedIn={props.loggedIn}/>
        <main>
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer/>
      </>
    );
  }
  
  export default Main;