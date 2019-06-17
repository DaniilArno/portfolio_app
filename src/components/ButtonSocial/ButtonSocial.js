import React from 'react';

import './ButtonSocial.css';

export default class ButtonSocial extends React.Component {
  buttons = [
    { name: 'fa-vk', id: "vk", link: "https://vk.com/darnautov" },
    { name: 'fa-instagram', id: "inst", link: "https://www.instagram.com/arnautovdo1" },
    { name: 'fa-facebook-f', id: "fb", link: "https://www.facebook.com/danil.arnautov" }
  ];
  constructor () {
    super()
    this.state = {
       isButtonActive: false
    }
     
  }

  mouseOver = () => {
    this.setState({ 
      isButtonActive: true 
    });
  }
  mouseOut = () => {
    this.setState({
      isButtonActive: false 
    });  
  }
  render () {
    const clazz = this.state.isButtonActive ? 'active' : '';
    const buttons = this.buttons.map( ( {name, id, link} ) => {
      return(
        <a key={ id }
          href={link}
          onMouseEnter={ this.mouseOver }
          onMouseLeave={ this.mouseOut }
          className={`btn ${clazz}`}>
          <i className={`fab fa-2x ${name} `}></i>
        </a>
      );
    });
    return (
      <div >
        {buttons}
      </div>
    )
  }
}