import "./sidebar.css";
import ProfileImg from './../../assets/images/sunset.jpg';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect,useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCat = async()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCat()
  },[]);

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
          {
            cats.map((cat,index)=>(
              <Link to={`/?cat=${cat.name}`} className="link" key={index}>
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            ))
          }
          
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
