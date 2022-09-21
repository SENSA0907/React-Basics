import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const navigateToLogin = (e) => {
        if (e.type === 'click') {
            navigate('./login')
        }
    }
  return (
    <div className="header-container">
        <div className="header-leftContainer">
            <div className='header-logo'>
                <img src={require('./assets/amazonLogo.png')} height={50} width={50} alt="Amazon"/>
            </div>
        </div>
        <div className="header-rightContainer">
            <nav className='rightNavigationBar'>
                <ul className='menuList'>
                    <li className='menuItem'>
                        <button className='navigationButtonLink' onClick={navigateToLogin}>Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header