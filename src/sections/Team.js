import diti from '../assests/diti.png'
import dhanush from '../assests/dhanushgopi.jpg'
import madhu from '../assests/madhu.png'
import monicka from '../assests/monica.png'
export default function Team(){
    return(
        <div className="team">
            <h2 className="title">Meet the Team⚡</h2>
            <div className="teammembers">
                <div className="membercard">
                    <img src={diti} className='memberpic' alt="The Diti V Jain"/>
                    <div className="memberdetails">
                        <p className="membername">Diti V Jain</p>
                        <a href="https://www.linkedin.com/in/diti-vjain/" className="material-symbols-outlined textoutline">open_in_new</a>
                    </div>
                </div>
                <div className="membercard">
                    <img src={dhanush} className='memberpic' alt="The Dhanush Gopi"/>
                    <div className="memberdetails">
                        <p className="membername">DhanushGopi</p>
                        <a href="https://www.linkedin.com/in/dhanushgopi/" className="material-symbols-outlined textoutline">open_in_new</a>
                    </div>
                </div>
                <div className="membercard">
                    <img src={madhu} className='memberpic' alt="The Madhumita"/>
                    <div className="memberdetails">
                        <p className="membername">Madhumita G</p>
                        <a href="https://www.linkedin.com/in/madhumita-g/" className="material-symbols-outlined textoutline">open_in_new</a>
                    </div>
                </div>
                <div className="membercard">
                    <img src={monicka} className='memberpic' alt="The Monicka"/>
                    <div className="memberdetails">
                        <p className="membername">Monicka M</p>
                        <a href="https://www.linkedin.com/in/monickamagesh/" className="material-symbols-outlined textoutline">open_in_new</a>
                    </div>
                </div>
            </div>
        </div>
    )
}