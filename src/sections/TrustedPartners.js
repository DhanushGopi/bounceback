import brandone from '../assests/brand1.svg'
import brandtwo from '../assests/brand2.svg'
import brandthree from '../assests/brand3.svg'
export default function TrustedPartners(){
    return(
        <div className='trustedpartners'>
            <p className='subtitle'>OUR TRUSTED PARTNERS!</p>
            <div className='partnerbrands'>
                <img src={brandone} className='brand brandone'/>
                <img src={brandtwo} className='brand brandtwo'/>
                <img src={brandthree} className='brand brandthree'/>
            </div>
        </div>
    )
}