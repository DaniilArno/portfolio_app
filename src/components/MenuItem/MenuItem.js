import React from 'react';
import './MenuItem.css';


export default class MenuItem extends React.Component {

  links = [
    {label: "Обо мне", id: "about"},
    {label: "Резюме", id: "resume"},
    {label: "Портфолио", id: "portfolio"},
    {label: "Контакты", id: "contact"},
  ];
  render() {
    const link = this.links.map( ( { label, id } ) =>  {
      return (
        <span  className="link" key={id}>
          {label}
        </span>
      );
    
    });
    return (
      <div>
        {link}
      </div>
    );
  };
 
};
