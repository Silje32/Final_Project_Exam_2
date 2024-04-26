import { NavLink } from "react-router-dom";
import { useToken } from "../../store/UseUserStore";
import LogoutButton from "../buttons/LogoutButton";
import LogoImg from "../logo/LogoImg";
import Header from "../header/Header";
import { NavStyling } from "./Nav.styles"; 


function Nav() {

  const token = useToken();

  return (
    <nav>
        <NavStyling>       
          {!token ? (
            <>       
              <ul> 
                <LogoImg />
                <Header />            
                <li>
                  <NavLink to="/">LOGIN</NavLink>
                </li>
                <li>
                  <NavLink to="/register">REGISTER</NavLink>
                </li>
              </ul>
            </> 
           ) : (
              <ul>
                 <LogoImg />
                 <Header />   
                <li>
                  <NavLink to="/home">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/create">CREATE POST</NavLink>
                </li>
                <li>
                  <NavLink to="/following">FOLLOWING</NavLink>
                </li>
                <li>
                  <NavLink to="/my-profile">MY PROFILE</NavLink>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </ul>  
           )}
        </NavStyling> 
    </nav>
  );
}

export default Nav;