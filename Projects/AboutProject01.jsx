import Projects01 from './images/Project__01.jpg';
import './Styles/Style.css';
function AboutProject01() {
  return (
    <>
      <div className='Projects__item'>
        <a href='#' className='Projects__link'>
          <img src={Projects01} className="Projects__image"></img>
          <p className="Projects__about">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, distinctio.
          </p></a>
      </div>
    </>
  );
}
export default AboutProject01;