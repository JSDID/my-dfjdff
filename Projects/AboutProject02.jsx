import Projects02 from './images/Project__02.jpg';
import './Styles/Style.css';
function AboutProject02() {
  return (
    <>
      <div className='Projects__item'>
        <a href='#' className='Projects__link'>
          <img src={Projects02} className="Projects__image"></img>
          <p className="Projects__about">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, distinctio.
          </p></a>
      </div>
    </>
  );
}
export default AboutProject02;