import BestBtn from "./BestBtn";

export default function BestPriceCard(props){
    return(
        <div className="bestpricecard">
            <p className="bestpricetitle">{props.pricetitle}</p>
            <p className="bestsubsprice">{props.subsprice}</p>
            <a href="https://bonceback-frontend.vercel.app/role"><BestBtn btntext="Get Start!"/></a>
            <div className="bestfeaturelist">
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