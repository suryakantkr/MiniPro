// import './Nav.css';
import logoImage from './logo.png'

function Navbar() {
    return (
        <div className='Nav'>
            <div className='log'>
             <img src={logoImage} alt='logo' id='logo-img'/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Navbar;