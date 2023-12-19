import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // Load current theme preference from local storage
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
  }, [])

  // Save theme preference to local storage
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.classList.remove(isDarkMode ? 'light-theme' : 'dark-theme');
    document.documentElement.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
  }, [isDarkMode])

  return (
    <nav className="navbar">
      <div className="name-item">
      <Link to="/">
        <span className="full-name">Aleksi Immonen</span>
        <span className="short-name">AI</span>
      </Link>      </div>
      <div className="nav-items">
        <div className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <span className="resources">Products</span>
          {isDropdownOpen && (
            <div className="dropdown-content">
            <a href="https://github.com/Aleksim/yt_to_text_and_bot" target="_blank" rel="noopener noreferrer">
            YouTube Transcript-Based Q&A Bot
            </a>
              <Link to="/coming-soon">Coming soon</Link>
              {/* <Link to="/coming-soon">Newest marketing tools</Link>
              <Link to="/coming-soon">Other</Link> */}
              {/* Add as many links as you need */}
            </div>
          )}
        </div>
        <Link to="/about">About</Link>
        <div className="mode-switch" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode 
            ? <FontAwesomeIcon icon={faSun} color="#FFFF00" /> 
            : <FontAwesomeIcon icon={faMoon} />
          }
        </div>
      </div>
    </nav>
  );
  
}

export default Navigation
