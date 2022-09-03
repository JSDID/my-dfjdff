import React, { Component } from 'react';

import "./About/Styles/About.css";
import Banner from './About/MyBanner';
import Face from './About/MyFace';
import NameFamely from './About/MyNameFamely';
import AboutMe from './About/MyAboutMe';
import MyLink from './About/MyLink';

export default class Card extends Component {
  render() {
    return (
      <div className="Card__item">
        <div className="Card__banner"><Banner/></div>
        <div className="Card__face"><Face/></div>
        <div className="Card__title"><NameFamely/></div>
        <div className="Card__about"><AboutMe/></div>
        <div className='Card__link'><MyLink/></div>
      </div>
    )
  }
}
