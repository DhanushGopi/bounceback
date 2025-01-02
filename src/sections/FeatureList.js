import img1 from '../assests/regimencreator.png'
import img2 from '../assests/progresstracking.png'
import img3 from '../assests/videoguides.png'
import img4 from '../assests/adaptiveregimens.png'
import img5 from '../assests/chat.png'
import img6 from '../assests/analytics.png'
export default function FeatureList(){
     return(
        <div className='productfeaturelist'>
            <h2 className='herotitle featuretitle'>BounceBack Features</h2>
            <p className='herosubtitle brandmsg'>BonceBack is a comprehensive recovery platform that brings patients and therapists together with customized fitness plans, real-time progress tracking, and adaptive regimens for quicker, more effective healing. Our goal is to provide a collaborative space where patients and therapists can create, monitor, and adjust recovery plans for optimal, long-lasting recovery.
            </p>
             <div className="herosec">
                <img src={img1} className='heroimg'/>
                <div className="herocontent">
                    <h2 className='title'>Regimen Creator</h2>
                    <p className='herosubtitle'>Therapists can design personalized exercise plans based on a patients condition and recovery goals. Each plan is tailored to ensure optimal progress and patient-specific care.</p>
                </div>
            </div>
            <div className="herosec">
            <div className="herocontent">
                    <h2 className='title'>Progress Tracking</h2>
                    <p className='herosubtitle'>Patients can log daily activities and key health metrics like pain levels and mobility. Therapists monitor this data to ensure recovery stays on track.
                    </p>
                </div>
                <img src={img2} className='heroimg'/>
            </div>
            <div className="herosec">
                <img src={img3} className='heroimg'/>
                <div className="herocontent">
                    <h2 className='title'>Video Guides</h2>
                    <p className='herosubtitle'>Integrated video tutorials help patients perform exercises correctly and safely. These ensure consistency and proper form during recovery.</p>
                </div>
            </div>
            <div className="herosec">
            <div className="herocontent">
                    <h2 className='title'>Adaptive Regimen</h2>
                    <p className='herosubtitle'>Regimens auto-adjust based on patient progress and real-time input. Therapists can review and refine plans to suit evolving recovery needs.</p></div>
                <img src={img4} className='heroimg'/>
            </div>
            <div className="herosec">
                <img src={img5} className='heroimg'/>
                <div className="herocontent">
                    <h2 className='title'>Chat</h2>
                    <p className='herosubtitle'>A secure messaging system enables therapists and patients to stay connected. This ensures timely feedback, motivation, and plan updates.</p>
                </div>
            </div>
            <div className="herosec">
            <div className="herocontent">
                    <h2 className='title'>Analytics Dashboard</h2>
                    <p className='herosubtitle'>An interactive dashboard provides visual insights into recovery progress. It tracks adherence, improvements, and key metrics over time.
                    </p>
                </div>
                <img src={img6} className='heroimg'/>
            </div>
        </div>
     )
}