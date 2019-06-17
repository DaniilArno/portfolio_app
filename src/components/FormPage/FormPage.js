import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import './FormPage.css';
import Form from '../Form/Form'

const FormPage = () => {
    return (
      <div className="bgForm">
        <PageTitle PageTitle="Прямой контакт" 
        PageSubtitle="Если вы заинтересовались в работе со мной, 
        то пишите на почту или в социальные сети" />
        <Form />
      </div>
    )
};

export default FormPage;