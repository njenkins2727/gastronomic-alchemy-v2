import React, { useState } from 'react';
import NavTabs from '../navbar/mainNav';
import Footer from '../footer/footer';
import Home from "../pages/home/home";
import About from '../pages/home/about';
import Login from '../forms/login/login';
import EasyDinner from "../pages/easyDinner/easyDinner";
import BreakfastHero from '../pages/breakfastHero/breakfastHero';
import DateNight from "../pages/dateNight/dateNight";
import DinnerParty from "../pages/dinnerParty/dinnerParty";
import Saved from "../pages/saved/saved";
import { breakfast, date, dinnerParty, easyDinner } from '../utils/recipe';


export default function ContainerChange() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'EasyDinner') {
        return <EasyDinner easyDinner={easyDinner}/>;
      }
      if (currentPage === 'BreakfastHero') {
        return <BreakfastHero breakfast={breakfast}/>;
      }
      if (currentPage === 'DateNight') {
        return <DateNight date={date}/>;
      }
      if (currentPage === 'DinnerParty') {
        return <DinnerParty dinnerParty={dinnerParty}/>;
      }
        return <Saved />;
     
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="main">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
