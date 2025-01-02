import heroimg from '../assests/heroimg.svg'
import PrimaryBtn from '../components/PrimaryBtn'
import SecBtn from '../components/SecBtn'
import doctrust from '../assests/doctorscount.svg'
import { NavLink } from 'react-router-dom'
export default function HeroSection(){
    return(
        <div className="herosec">
            <div className="herocontent">
                <h1 className='herotitle'> Your Partner in Personalized Recovery</h1>
                <p className='herosubtitle'>Seamlessly connect with physiotherapists, get personalized guidance, and achieve measurable results at all in one platform.</p>
                <div className='herobtns'>
                    <NavLink to='/about'><SecBtn btntext="Explore More"/></NavLink>
                    <a href="https://bonceback-frontend.vercel.app/"><PrimaryBtn btntext="Get Start!"/></a>
                </div>
                <div className='herotrust'>
                    <img src={doctrust} className="docdp" alt="doctors who use the app"/>
                    <p className='herotrusttext'>2K+ Physiotherapist onboarded!</p>
                </div>
            </div>
            <img src={heroimg} className='heroimg'/>
        </div>
    )
}