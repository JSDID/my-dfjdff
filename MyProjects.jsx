import AboutProject01 from './Projects/AboutProject01';
import AboutProject02 from './Projects/AboutProject02';



import React, { Component } from 'react'

let title = "Проекти";
export default class MyProjects extends Component {
  render() {
    return (
      <>
        <div className='Info__item'>
          <h1 className='Info__title'>{title}</h1>
        </div>
         <div className='Projects__items'>
          <div className="Projects__row">
            <div className='Projects__column'>
              <AboutProject01 />
              <AboutProject02 />
              <AboutProject01 />
            </div>
            <div className='Projects__column'>
              <AboutProject01 />
              <AboutProject02 />
              <AboutProject01 />
            </div>
          </div>
         </div>
      </>
    )
  }
}
