import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './PageTitle.css';

const PageTitle = (props)=> {
  return (
    <ScrollAnimation animateIn="fadeInDown">
    <div className="container-fluid PagestyleBlock">
      <div className="row justify-content-center"  >
        <div className="col d-flex justify-content-center">
            <div className="PageSkillsTitle">
              {props.PageTitle}
            </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 d-flex justify-content-center">
          <div className="PageSkillsText">
            {props.PageSubtitle.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  </ScrollAnimation>
  )
};


export default PageTitle;