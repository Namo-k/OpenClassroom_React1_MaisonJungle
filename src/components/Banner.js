import '../styles/Banner.css';
import logo from '../assets/logo.png'

function Banner() {
    const titre = "La maison jungle"
    return (
        <div className='lmj-banner'>
            <img className='lmj-logo' src={logo} alt={titre} />
            <h1 style={{color: 'blue'}}>{titre}</h1>
        </div>
    )
}
// function Banner({ children }) {
//     return <div className='lmj-banner'>{children}</div>
// }

export default Banner