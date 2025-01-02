import PrimaryBtn from "./PrimaryBtn";

export default function PriceCard(props){
    return(
        <div className="pricecard">
            <p className="pricetitle">{props.pricetitle}</p>
            <p className="subsprice">{props.subsprice}</p>
            <a href="https://bonceback-frontend.vercel.app/"><PrimaryBtn btntext="Get Start!"/></a>
            <div className="featurelist">
                <ul>
                    <li>{props.line1}</li>
                    <li>{props.line2}</li>
                    <li>{props.line3}</li>
                    <li>{props.line4}</li>
                    <li>{props.line5}</li>
                </ul>
            </div>
        </div>
    )
}