import './MarsInfo.css';
import logo from './img/cow.png';
import waterBucket from './img/waterBucket.jpg';
import avatar from './img/merchantAvatar.jpg';
import { useNavigate } from 'react-router-dom';

function MarsInfo () {
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

            <nav className="navbar">
            <a href="#" className="logo-container" onClick={goHome}>
            <img className="cow" src={logo} alt="logo" />
            <span className="logo-text text">AlienExpress</span>
            </a>
            <div className="nav-links">
            <a href="index.html" className="text cursor">Desktop App</a>
            <a className="text cursor">Location Selection</a>
            <a onClick={goToListing} className="text cursor">Resource Shop</a>
            </div>
        </nav>
        waterBucket
        
    <div className="breadcrumb">
        <a href="listing.html">Galactic Hub</a>
        <span></span>
        <a href="marsinfo.html">Mars Resources</a>
        <span></span>
        Mars Bucketed Water 
    </div>
    <div class="product-container">
    <div class="left-column">
            <div class="product-image">
                <img src="https://cdn.glitch.global/6cecf6a3-d527-4bf1-b4c3-e4900e777fdb/OIP%20(1).jpg" alt="Jupiter Canned Water" className="productPhoto" />
            </div>
            <div class="source-info">
                <div class="source-indicator"></div>
                <div>Sourced from (red indicators): <br/>Drag the model around!</div>
                <iframe src="mars.html"></iframe>
            </div>
        </div>
    <div className="product-info">
        <div>
                <h1 className="product-title">Mars Bucket o' Water</h1>
                <p className="product-price">50.00 cows 🐄</p>
                <small className="red">⚠️ Basic filtration only & prone to spillage - Industrial use recommended</small>
            </div>

            <div className="product-status">
                <i className="fas fa-shield-alt status-icon"></i>
                <div>
                    <div>Protected by Intergalactic Trade Federation</div>
                    <small className="pointSeven">All transactions secured by quantum encryption</small>
                </div>
            </div>
    </div>
    <button className="btn btn-primary">Purchase Now</button>

<div className="product-details">
    <p>• Extracted from Mars polar ice caps</p>
    <p>• Basic filtration applied</p>
    <p>• Contains mineral deposits</p>
    <p>• High iron content - rusty color</p>
    <p>• Not recommended for consumption</p>
    <p>• Suitable for: </p>
    <ul className="productDetailsUl">
        <li>Industrial cooling</li>
        <li>Terraforming projects</li>
        <li>Chemical processing</li>
        <li>Construction work</li>
    </ul>
</div>
<div className="tags">
                <span className="tag">#MarsWater</span>
                <span className="tag">#IronOxidized!</span>
                <span className="tag">#MarsBars</span>
            </div>

            <div className="merchant-info">
                <div className="merchant-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div>
                    <div>Red Planet Resources Ltd</div>
                    <small className="pointSeven">Basic Resource Extractor - Class C License</small>
                </div>
            </div>
    </div>
    
        </>
    );
}

export default MarsInfo;