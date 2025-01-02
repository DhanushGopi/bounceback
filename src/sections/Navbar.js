import { NavLink } from 'react-router-dom'
import bblogo from '../assests/bblogo.svg'
import PrimaryBtn from '../components/PrimaryBtn'
import SecBtn from '../components/SecBtn'

export default function Navbar(props){
    return(
        <div className="navbar">
            <img className="bblogo" src={bblogo} alt="BounceBack Logo"/>
            <div className='navpathlinks'>
                <NavLink to='/' className="navlink"><p className="navbtn navhome" id={props.homeactive}>Home</p></NavLink>
                <NavLink to='/about' className="navlink"><p className="navbtn navabout" id={props.aboutactive}>About</p></NavLink>
                <a href="#footer" className='textoutline'><p className="navbtn">Contact</p></a>
            </div>
            <div className='navctabtns'>
            <a href="https://bonceback-frontend.vercel.app/"><SecBtn btntext="Login"/></a>
            <a href="https://bonceback-frontend.vercel.app/role"><PrimaryBtn btntext="Get Start!"/></a>
            </div>
        </div>
    )
}