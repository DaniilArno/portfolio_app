import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import ScrollAnimation from 'react-animate-on-scroll';

import './Resume.css';

const Resume = () => {
    return (
      <div className="bgResume">
        <PageTitle PageTitle="Резюме" PageSubtitle="Мои знания и образование" />

        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-end">
            <ScrollAnimation animateIn="fadeInLeft">
              <ul className="resumeLeft resumeLeft_small">
                  <li>
                     Образование
                  </li>
                  <li>
                    <i className="fas fa-3x fa-laptop"/>
                  </li>
                  <li>
                    <span>
                      Высшее
                    </span>
                  </li>
                  <li>
                    Национальный исследовательский технологический университет "МИСиС", 
                    июнь 2015, кафедра защиты металлов и технологии поверхности (ЗМиТП), 
                    специальность «Физико-химия процессов и материалов». 
                    Квалификация - специалист.
                  </li>
                  <li>
                    <span>
                      Самообразование
                    </span>
                  </li>
                  <li>
                    Курсы в интернете, видеокурсы, вебинары, книги, 
                    документация, форумы, статьи. 
                    Созданием сайтов занимаюсь с 2015 года по настоящее время.
                  </li>
              </ul>
              </ScrollAnimation>
            </div>
           
            <div className="col-sm-6 d-flex justify-content-start">
            <ScrollAnimation animateIn="fadeInRight">
              <ul  className="resumeRight resumeRight_small">
                <li>
                    Возможности
                </li>
                <li>
                  <i className="far fa-3x fa-lightbulb"/>
                </li>
                <li>
                  <span>
                    Знания в области Web
                  </span>
                </li>
                <li>
                  Языки программирования: JavaScrip, git, язык разметки HTML(5), 
                  шаблонизатор Nunjucks, таблицы стилей CSS(3),Gulp/Webpack, 
                  CMS WordPress, адаптивная верстка под мобильные устройства, 
                  фреймворк Bootstrap/Flexbox, библиотека jQuery.
                </li>
                <li>
                  <span>
                    Программы
                  </span>
                </li>
                <li>
                  Adobe Photoshop, Abode Illustrator, FileZilla, Zeplin, 
                  IDE VSCode/Sublime, CMS WordPress, XAMPP/OpenServer, Git.
                </li>
                <li>
                  <span>
                    Знание языков
                  </span>
                </li>
                <li>
                Русский, английский(технический).
                </li>
              </ul>
              </ScrollAnimation >
            </div>

          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
            <ScrollAnimation animateIn="fadeInUp">
              <ul className="resumeCenter">
                <li>
                  <span>
                    Дополнительная информация 
                  </span>
                </li>
                <li>
                  Занимаюсь разработкой сайтов любой направленности — 
                  Сайты-визитки, одностраничники (landing page),многостраничники, 
                  корпоративные сайты, интернет-магазины, SPA. 
                </li>
              </ul>
              </ScrollAnimation >
            </div>
          </div>
        </div>
      </div>

    )
};

export default Resume;