import './header.css';
import bgImg from './../../assets/images/sunset.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Discover, Cook, and Share Your</span>
        <span className='headerTitleLg'>Cooking Adventures with Us!</span>
      </div>
      <img className='headerImg' src={bgImg} alt="bg" />
    </div>
  )
}

export default Header