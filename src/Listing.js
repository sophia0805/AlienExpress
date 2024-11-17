import './Listing.css';
import logo from './img/cow.png';
import { useNavigate } from 'react-router-dom';

function Listing () {
    const navigate = useNavigate();
    
  const goToMap = () => {
    navigate('/map');
  };

  const goToListing = () => {
    navigate('/listing');
  };

  const goHome = () => {
    navigate('/home');
  };

  const goToMarsListing = () =>{
    navigate('/marsinfo');
  }
    return(
        <>
        <div className="stars"></div>
    <div className="stars"></div>
    <div className="stars"></div>
    <div className="nebula"></div>
    <div className="shooting-star"></div>
    <div className="shooting-star"></div>
    <div className="shooting-star"></div>
    <nav className="navbar">
    <a className="logo-container" onClick={goHome}>  
                    <img className="cow" src={logo} alt="logo"/>
                        <span className="logo-text text">AlienExpress</span>
                </a>
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search for galactic resources..."/>
        </div>
        <div className="nav-links">
            <a>Desktop App</a>
            <a onClick={goToMap}>Place Selection</a>
            <a onClick={goToListing}>Shop</a>
        </div>
    </nav>
    <div className="product-grid">
        <a href="marsinfo.html" className="product-card-link" onClick={goToMarsListing}>
            <div className="product-card floating">
                <div className="product-image">
                    <img src="https://cdn.glitch.global/6cecf6a3-d527-4bf1-b4c3-e4900e777fdb/OIP.jpg" alt="bucketsMars" className="productImage" />
                </div>
                <h2 className="product-title">50 Buckets of Mars Water</h2>
                <p className="product-price">5 cow 🐄</p>
            </div>
        </a>
        
        <a href="jupiterinfo.html" className="product-card-link">
            <div className="product-card floating">
                <div className="product-image">
                    <img src="https://cdn.glitch.global/6cecf6a3-d527-4bf1-b4c3-e4900e777fdb/can%20water.avif" alt="cannedJupiter" className="productImage" />
                </div>
                <h2 className="product-title">Canned Jupiter Water</h2>
                <p className="product-price">1 cows 🐄</p>
            </div>
        </a>
    </div>
        </>
    );
}

export default Listing;