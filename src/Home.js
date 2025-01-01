import './Home.css';
import logo from './img/cow.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const goToMap=()=>{
        navigate('/map');
    }

    const goToListing=()=>{
        navigate('/listing');
    }

    const goHome=()=>{
        navigate('/home');
    }
    return(
        <>
            <nav className="navbar">
                <a href="#" className="logo-container" onClick={goHome}>  
                    <img className="cow" src={logo} alt="logo"/>
                        <span className="logo-text text">AlienExpress</span>
                </a>
                <div className="nav-links">
                    <a href="index.html" className="text cursor">Desktop App</a> 
                    <a className="text cursor" onClick={goToMap}>Location Selection</a>
                    <a onClick={goToListing}className="text cursor">Resource Shop</a>
                </div>
            </nav>
            
        <div className="titleing">
            <div className="glow"></div>
            <h1 className="floating text">Intergalactic Resource Marketplace</h1>
            <h2 className="floating text">For underpriviledged and water-scarce communities </h2>
            <a className="startbutton pulse text" onClick={goToMap}>
                Get Started
            </a>
        </div>
        <div className="features">

        <div className="feature-card">
            <img src="https://cdn.glitch.global/6cecf6a3-d527-4bf1-b4c3-e4900e777fdb/Screenshot%202024-11-16%20145647.png" alt="Mapping" className='mapping' />
            <h3 className="text">Agriculture Potential</h3>
            <p className="text">Mapping to get soil moisture, weather, and everything else needed to farm</p>
        </div>

        <div className="feature-card">
            <img src="https://cdn.glitch.global/6cecf6a3-d527-4bf1-b4c3-e4900e777fdb/OIP.jpg" alt="Resources" className='resources' />
            <h3 className="text">Resource Trade</h3>
            <p className="text">Trading natural resources from other planets for cows on earth</p>
        </div>
        <div className="feature-card">
            <img src="https://cdn.mos.cms.futurecdn.net/idzyPDTtTT7KgXJoTpmuoG.jpg" alt="Resources" className='resources' />
            <h3 className="text">Alien Communications</h3>
            <p className="text">Building relations with our alien overlords through trade</p>
        </div>
    </div>
        </>
    );
}

export default Home;