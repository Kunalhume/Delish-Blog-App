import "./sidebar.css";
import ProfileImg from './../../assets/images/sunset.jpg';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img src={ProfileImg} alt="ProfileImg" />
        <p>Loream asdkjjsgnia v.sngad nasjknfiha dafm,dsgadhawjhjhaefjhagmejafukmagsd</p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Categories</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Follow Us</div>
        <div className="sidebarSocial">
        <i className="sidebarIcon"><FacebookIcon/></i>
        <i className="sidebarIcon"><TwitterIcon/></i>
        <i className="sidebarIcon"><PinterestIcon/></i>
        <i className="sidebarIcon"><InstagramIcon/></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
