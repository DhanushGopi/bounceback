import EmptyBlock from "../components/EmptyBlock";
import FaqSection from "../sections/FaqSection";
import FeatureHero from "../sections/FeatureHero";
import Footer from "../sections/Footer";
import HeroSection from "../sections/HeroSection";
import Navbar from "../sections/Navbar";
import PricingList from "../sections/PricingList";
import TrustedPartners from "../sections/TrustedPartners";

export default function HomePage(){
    return(
        <div className="cont">
            <Navbar homeactive="activenavbtn"/>
            <HeroSection/>
            <TrustedPartners/>
            <FeatureHero/>
            <PricingList/>
            <FaqSection/>
            <Footer/>
        </div>
    )
}