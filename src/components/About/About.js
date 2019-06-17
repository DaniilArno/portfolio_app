import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import PageContent from '../PageContent/PageContent'
import './About.css'

const About = () => {
    return (
      <div className="bgAbout">
        <PageTitle PageTitle="Обо мне" PageSubtitle="Познакомимся ближе" />
        <PageContent />
      </div>

    )
};

export default About;