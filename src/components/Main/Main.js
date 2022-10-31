import React from 'react';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
    const HeaderBackground = 'header_is-dark'
    return (
      <page>
        <Header HeaderBackground={HeaderBackground}/>
        <main>
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer/>
      </page>
    );
  }
  
  export default Main;