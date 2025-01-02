import BrandHero from "../sections/BrandHero";
import FaqSection from "../sections/FaqSection";
import FeatureList from "../sections/FeatureList";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import PricingList from "../sections/PricingList";
import Team from "../sections/Team";

export default function AboutPage(){
    return(
        <div className="cont">
            <Navbar aboutactive="activenavbtn"/>
            <BrandHero/>
            <Team/>
            <PricingList/>
            <FaqSection/>
            <Footer/>
        </div>
    )
} 