import "./topbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';

import topRightImg from './../../assets/images/sunset.jpg';

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon"><FacebookIcon/></i>
        <i className="topIcon"><TwitterIcon/></i>
        <i className="topIcon"><PinterestIcon/></i>
        <i className="topIcon"><InstagramIcon/></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src={topRightImg} alt="bg" />
        <i className="topSearchIcon"><SearchIcon/></i>
      </div>
    </div>
  );
};

export default Topbar;
