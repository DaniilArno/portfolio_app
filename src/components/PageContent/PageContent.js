import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './PageContent.css';
import ButtonSocial from '../ButtonSocial/ButtonSocial'
import "animate.css/animate.min.css";


import img from  '../../img/about.jpg';

export default class PageContent extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row  pageMarginBottom d-flex justify-content-center">
            <div className="col-lg-4  col-sm-10 ">
              <ScrollAnimation animateIn="fadeInLeft">
                <div className="aboutTitle d-flex justify-content-center">
                  Немного о себе
                </div>
                <div className="aboutLeftText d-flex justify-content-center">
                Доброго времени суток, меня зовут Даниил. Занимаюсь разработкой сайтов с нуля, 
                под ключ. Выполняю верстку и программирование сайтов. 
                Добавляю весь необходимый функционал на сайт. 
                Делаю адаптивную верстку на Bootstrap, 
                таким образом Ваш сайт будет отлично выглядеть на всех устройствах. 
                Любой начатый проект довожу до конца, постоянно совершенствую свой 
                профессиональный уровень. Вы можете заказать у меня разработку сайта с нуля, 
                или связаться со мной для сотрудничества.
                </div>
                </ScrollAnimation> 
            </div>

            <div className="col-lg-4">
              <ScrollAnimation animateIn="fadeInDown">
                  <div className="aboutTitle aboutTitle_image d-flex justify-content-center">
                    Фото
                  </div>
                  <div className="aboutCenterText d-flex justify-content-center">
                    <img src={img} alt="ava" />
                  </div>
                </ScrollAnimation> 
            </div>

            <div className="col-lg-4">
              <ScrollAnimation animateIn="fadeInRight">
                <div className="aboutTitle aboutTitle_info d-flex justify-content-center">
                  Персональная информация
                </div>
                <div className="aboutRightText d-flex justify-content-center">
                  <ul>
                    <li>
                      Арнаутов Даниил
                    </li>
                    <li>
                      День рождения: 4 мая 1993 года 
                    </li>
                    <li>
                      E-mail: arnautovdo93@gmail.com
                    </li>
                    <li>
                      Skype: arnautovdo1 
                    </li>
                    <li>
                      Веб-сайт: arnautovdo.ru
                    </li>
                  </ul>
                </div>
                <div className="btn-group btnSocials">
                  <ButtonSocial  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>  
      </div>
    );
  }
};