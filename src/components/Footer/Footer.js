import React from 'react';


import ButtonSocial from '../ButtonSocial/ButtonSocial';

import './Footer.css';

const Footer = ()=> {
  return(
    <div className="footer container-fluid">
      <div className="row">
        <div  className="col-md-8  col-sm-7 offset-md-1 col-7  footer__descr d-flex align-items-center">
            © 2015 Даниил Арнаутов. <span>Профессиональная разработка сайтов.</span>
        </div>
        <div  className="col-md-3 col-sm-5 col-5">
            <ButtonSocial />
        </div>
      </div>
     
    </div>
  )
};

export default Footer;