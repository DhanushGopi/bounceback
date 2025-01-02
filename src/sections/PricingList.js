import BestPriceCard from "../components/BestPriceCard";
import PriceCard from "../components/PriceCard";

export default function PricingList(){

    const changepatienttoogle = () =>{
        document.querySelector(".therapisttooglebtn").classList.remove('blackbtn');
        document.querySelector(".patienttooglebtn").classList.add('blackbtn');  
        document.querySelector(".patienttooglebtn").classList.remove('nostatebtn');
        document.querySelector(".therapisttooglebtn").classList.add('nostatebtn');  
        
        //For the subscription model reveal
        document.querySelector(".patientprice").classList.remove('hide');
        document.querySelector(".therapistprice").classList.add('hide');  
    }

    const changetherapisttoogle = () =>{
        document.querySelector(".patienttooglebtn").classList.remove('blackbtn');
        document.querySelector(".therapisttooglebtn").classList.add('blackbtn');  
        document.querySelector(".therapisttooglebtn").classList.remove('nostatebtn');
        document.querySelector(".patienttooglebtn").classList.add('nostatebtn'); 
        
        //For the subscription model reveal
        document.querySelector(".therapistprice").classList.remove('hide');
        document.querySelector(".patientprice").classList.add('hide');  
    }


    const pricecard1 = {
        pricetitle:"For an Individual",
        subsprice:"₹2,500",
        desc:["Personalized fitness regimens tailored to your needs.",
            "Progress tracking with easy-to-read reports.",
            "Access to video guides for better execution.",
            "Adaptive planning for continuous improvement.",
            "Seamless communication with your therapist"
            ]
    }

    const pricecard2 = {
        pricetitle:"For an Sportsperson",
        subsprice:"₹5,000",
        desc:["Customized high-performance Workout plans.",
            "Detailed analytics dashboard for progress insights.",
            "Exclusive access to advanced video tutorials.",
            "Dynamic updates based on performance and recovery.",
            "Direct engagement with experts."
            ]
    }

    const pricecard3 = {
        pricetitle:"For a Family",
        subsprice:"₹6,500",
        desc:["Multi-user access for family members.", 
             "Collaborative progress tracking for everyone.", 
             "Easy-to-follow video guides for all ages.", 
              "Personalized plans for different health goals.",
              "24/7 communication with a dedicated therapist."
            ]
    }

    const pricecard4 = {
        pricetitle:"For an Therapist",
        subsprice:"₹5,000",
        desc:["Tools to create custom regimens for patients.",
            "Patient progress monitoring in real time.",
            "Access to analytics for improved therapy decisions.",
            "Video guides to share with patients.",
            "Enhanced communication to engage better."
            ]
    }

    const pricecard5 = {
        pricetitle:"For a Clinic",
        subsprice:"₹20,000",
        desc:["Manage multiple patients with ease.",
            "Detailed dashboard for patient progress insights.",
            "Scalable adaptive planning tools for clinics.",
            "Shareable video guides for patients.",
            "Effective communication tools to streamline therapy."
            ]
    }

    const pricecard6 = {
        pricetitle:"For a Hospital",
        subsprice:"₹1,00,000",
        desc:["Comprehensive tools for hospital-scale therapy management.",
            "Multi-user access for therapists and support staff.",
            "Advanced analytics for better decision-making.",
            "Custom video content for hospital patients.",
            "Efficient communication tools for patient care teams."
            ]
    }



    return(
        <div className="pricinglist">
            <h2 className="title">Get your personalized recovery partner</h2>
            <div className="pricetogglebtn">
                <input type="button" className="blackbtn patienttooglebtn" value="Patient" onClick={changepatienttoogle}/>
                <input type="button" className="nostatebtn therapisttooglebtn" value="Therapist" onClick={changetherapisttoogle}/>
            </div>
            <div className="pricings">
                <div className="patientprice">
                    <PriceCard 
                        pricetitle={pricecard1.pricetitle} 
                        subsprice={pricecard1.subsprice} 
                        line1={pricecard1.desc[0]} 
                        line2={pricecard1.desc[1]} 
                        line3={pricecard1.desc[2]} 
                        line4={pricecard1.desc[0]} 
                        line5={pricecard1.desc[4]}/>
                    <BestPriceCard 
                        pricetitle={pricecard2.pricetitle} 
                        subsprice={pricecard2.subsprice} 
                        line1={pricecard2.desc[0]} 
                        line2={pricecard2.desc[1]} 
                        line3={pricecard2.desc[2]} 
                        line4={pricecard2.desc[0]} 
                        line5={pricecard2.desc[4]}/>
                    <PriceCard 
                        pricetitle={pricecard3.pricetitle} 
                        subsprice={pricecard3.subsprice} 
                        line1={pricecard3.desc[0]} 
                        line2={pricecard3.desc[1]} 
                        line3={pricecard3.desc[2]} 
                        line4={pricecard3.desc[0]} 
                        line5={pricecard3.desc[4]}/>

                </div>
                <div className="therapistprice hide">
                <PriceCard 
                        pricetitle={pricecard4.pricetitle} 
                        subsprice={pricecard4.subsprice} 
                        line1={pricecard4.desc[0]} 
                        line2={pricecard4.desc[1]} 
                        line3={pricecard4.desc[2]} 
                        line4={pricecard4.desc[0]} 
                        line5={pricecard4.desc[4]}/>
                    <BestPriceCard 
                        pricetitle={pricecard5.pricetitle} 
                        subsprice={pricecard5.subsprice} 
                        line1={pricecard5.desc[0]} 
                        line2={pricecard5.desc[1]} 
                        line3={pricecard5.desc[2]} 
                        line4={pricecard5.desc[0]} 
                        line5={pricecard5.desc[4]}/>
                    <PriceCard 
                        pricetitle={pricecard6.pricetitle} 
                        subsprice={pricecard6.subsprice} 
                        line1={pricecard6.desc[0]} 
                        line2={pricecard6.desc[1]} 
                        line3={pricecard6.desc[2]} 
                        line4={pricecard6.desc[0]} 
                        line5={pricecard6.desc[4]}/>
                </div>
            </div>
        </div>
    )
}