import { NavLink } from 'react-router-dom'
import heroimg from '../assests/herofeature.png'
import SecBtn from '../components/SecBtn'
export default function FeatureHero(){
     return(
        <div className="herosec">
            <img src={heroimg} className='heroimg'/>
            <div className="herocontent">
                <h2 className='title'> BounceBack Features</h2>
                <div className='heropoints'>
                <p className='herosubtitle'>1. Regimen Creator</p>
                <p className='herosubtitle'>2. Progress Tracking</p>
                <p className='herosubtitle'>3. Video Guides</p>
                <p className='herosubtitle'>4. Adaptive Regimen</p>
                <p className='herosubtitle'>5. Chat</p>
                <p className='herosubtitle'>6. Analytics Dashboard</p>
                </div>
                <NavLink to='/about'><SecBtn btntext="Explore More"/></NavLink>
            </div>
        </div>
     )
}