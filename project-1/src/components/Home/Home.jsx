import './Home.css';
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import contactImage from './contact.svg';
function Home() {
    return (
        <div className='Home'>
            <div className="heading-contact">
                <h1>CONTACT US</h1>
                <p>LET'S CONTACT: WE'RE HERE TO HELP, AND WE'D LOVE TO HERE FROM YOU! WETHERE YOU HAVE A QUATIONS, COMMENTS, OR JUST WANT TO CHAT, YOU CAN REACT OUT TO US THROUGH! THE CONTACT FORM OF THIS PAGE, BY EMAIL, PHONE, OR SOCIAL NETWORL.  </p>
            </div>
            <div className="form">
                <div className="contener">
                    <div className="btn">
                        <button><MdMessage /> VIA SUPPORT CHAT</button>
                        <button><IoCall /> VIA CALL</button>
                    </div>
                    <div className="inpit">
                        <input type="text" placeholder='CHAT' id='in-vsc' /><br />
                        <input type="text" placeholder='NAME' id="in-name" /><br />
                        <input type="text" placeholder='EMAIL' id="in-email" /><br />
                        <input type="text" placeholder='BOX' id="in-box" />
                    </div>
                    <div className="sub">
                        <button>Submit</button>
                    </div>
                </div>
                <div className="landing-page">
                    <img src={contactImage} alt='page' id='page'/>
                </div>

            </div>
        </div>
    )
}
export default Home;