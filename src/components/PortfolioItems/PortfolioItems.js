import React from 'react';

import './PortfolioItems.css';
import PortfolioData from '../../data/PortfolioData'
export default class PortfolioItems extends React.Component {
 

  
render() {
  const portfolioItem = PortfolioData.map( ({  link,name, type, url }) => {
  return(
    <div key={name} className="col-lg-4 col-sm-6 col-12  d-flex justify-content-center">
      <div  className="card">
        <img  src={require(`../../img/${url}`)} alt=""  />
        <div className="overlay">
          <h4> {name} </h4>
          <p> •{type}• </p>
          <a href={link} className="btn btnPortfolio btn-outline btn-lg" role="button" aria-pressed="true">
            Перейти на сайт
          </a>
        </div>
      </div>
    </div>
  )
});
   return (
    <div className="container">
      <div className="row">
        {portfolioItem}
      </div>
    </div>
   )
  };
}

