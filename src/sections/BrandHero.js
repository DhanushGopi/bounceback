import img1 from '../assests/bouncy.svg'

export default function BrandHero(){
    return(
        <div className="herosec">
                <img src={img1} className='heroimg'/>
                <div className="herocontent">
                    <h2 className='title'>BounceBack</h2>
                    <p className='herosubtitle'>Bonce Back is a comprehensive recovery platform that brings patients and therapists together with customized fitness plans, real-time progress tracking, and adaptive regimens for quicker, more effective healing. Our goal is to provide a collaborative space where patients and therapists can create, monitor, and adjust recovery plans for optimal, long-lasting recovery.</p>
                </div>
            </div>
    )
}