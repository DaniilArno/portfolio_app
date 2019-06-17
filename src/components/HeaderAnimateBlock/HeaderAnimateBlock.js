import React from 'react';

import './HeaderAnimateBlock.css';

export default class HeaderAnimateBlock extends React.Component {
  render() {  

    return (
      <div className="container-fluid" >
        <div className="row justify-content-center"  >
          <div className="col d-flex justify-content-center styleBlock">
              <div  className="headerSkillsTitle">
                Web-Developer
              </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 d-flex justify-content-center">
            <div  className="headerSkillsText">
              Навыки : HTML5 / CSS3 / XAMPP/  Bootstrap / SCSS /
              Flexbox / JavaScript / JQuery / Nunjucks / Git / 
              Adobe Photoshop / Zeplin / Gulp / Webpack / БЭМ / WordPress / React / Redux
            </div>
          </div>
        </div>
      </div>
    );
  };
};
