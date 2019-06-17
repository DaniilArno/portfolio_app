import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import  PortfolioItems from '../PortfolioItems/PortfolioItems'
import './Portfolio.css'

const Portfolio = () => {
    return (
      <div className="bgAbout">
        <PageTitle 
        PageTitle="Портфолио" 
        PageSubtitle="Мои последние работы. По настоящее время разрабатываю сайты для команий." />
        <PortfolioItems />
      </div>


    )
};

export default Portfolio;