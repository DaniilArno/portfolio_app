import React from 'react';
import './HeaderCustom.css';
import HeaderAnimateBlock from '../HeaderAnimateBlock/HeaderAnimateBlock';
import {Animated} from "react-animated-css";


export default class HeaderCustom extends React.Component {
  render() {
    return (
      <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
        <header className="header">
          <h1 className="d-flex justify-content-center headerName">
            {this.props.headerTitle}
          </h1>
          
          <HeaderAnimateBlock />
        </header>
      </Animated>
    );
  }
};
