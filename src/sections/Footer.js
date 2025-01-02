import { NavLink } from 'react-router-dom'
import footerlogo from '../assests/bbfooterlogo.svg'
export default function Footer(){
    return(
        <div className="footer" id='footer'>
            <div className="footerdetails">
                <div className="footerleft">
                    <img src={footerlogo} alt="Bounce Back Logo"/>
                    <p className='reachus' id='reachus'>Reach us: hello@bounceback.com</p>
                    <p className='crights'>2025 © BOUNCEBACK</p>
                </div>
                <div className="footerright">
                    <NavLink to='/' className="navlink"><p className="navbtn footerbtn navhome">Home</p></NavLink>
                    <NavLink to='/about' className="navlink"><p className="navbtn footerbtn navabout">About</p></NavLink>
                    <a href="#footer" className='textoutline'><p className="navbtn footerbtn ">Contact</p></a>
                </div>
            </div>
            <h2 className='footerbrand'>BOUNCEBACK</h2>
        </div>
    )
}