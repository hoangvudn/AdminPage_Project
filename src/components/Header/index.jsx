import React from 'react';
import menuLogo from '../images/nav.png'
import logoutIcon from '../images/logout.jpg'
const Header = () => {
   return (
          <div  className="blockHeader">
             <div className="blockHeader__menuLogo">
                <img src={menuLogo}/>
             </div>   
             <div className="blockHeader__logoutIcon">
                 <label >Administrator</label>
                 <img src={logoutIcon}/>
             </div> 
          </div>
   )
}
export default Header;