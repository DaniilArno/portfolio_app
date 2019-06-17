import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import './Contact.css';

const Contact = () => {
    return (
      <div className="bgContact">
        <PageTitle PageTitle="Контакты" PageSubtitle="Связаться со мной" />
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-end">
            <ScrollAnimation animateIn="fadeInLeft">
              <ul className="resumeLeft  contactLeft">
                  <li>
                    <div>
                      <i className="far fa-3x fa-map"/>
                    </div>
                    Россия, г.Москва
                  </li>
                  <li>
                    <div>
                      <i className="far fa-3x fa-envelope-open"/>
                    </div>
                    arnautovdo93@gmail.com
                  </li>
                  <li>
                    <div>
                      <i className="fab fa-3x fa-vk"/>
                    </div>
                    vk.com/darnautov
                  </li>
              </ul>
              </ScrollAnimation>
            </div>
           
            <div className="col-6 d-flex justify-content-start">
            <ScrollAnimation animateIn="fadeInRight">
              <ul  className="resumeRight contactRight">
                <li>
                  <div>
                    <i className="fab  fa-3x fa-chrome"/>
                  </div>
                  <div>
                  arnautovdo.ru
                  </div>
                </li>
                <li>
                  <div>
                    <i className="fab fa-3x fa-skype"/>
                  </div>
                  arnautovdo1
                </li>
                <li>
                  <div>
                    <i className="fab  fa-3x fa-facebook-f"/>
                  </div>
                  facebook.com/arnautov
                </li>
       
           
              </ul>
              </ScrollAnimation >
            </div>

          </div>

        </div>
      </div>

    )
};

export default Contact;