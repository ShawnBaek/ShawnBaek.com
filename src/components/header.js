import React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/logo/white_logo.svg';
import "../styles/main.scss"

const Header = ({ siteTitle }) => (
  <div className="container">
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
            <ul class="navigation__list">
            <li class="navigation__item">
                <Link className="navigation__link" to="blog">Blog</Link>
            </li>
            <li class="navigation__item">
                <Link className="navigation__link" to="portfolio">Portfolio</Link>
            </li>
            <li class="navigation__item">
                <Link className="navigation__link" to="resources">Resources</Link>
            </li>
            </ul>
        </nav>
    </div>
    <header className="header">
        <Link to="/"><Logo alt="shawnbaek logo" className="header__logo"/></Link>
        <nav className="header__nav">
        <div className="header__item">
            <Link to="blog" className="header__link">Blog</Link>
        </div>
        <div className="header__item">
            <Link to="portfolio" className="header__link">Portfolio</Link>
        </div>
        <div className="header__item">
            <Link to="resources" className="header__link">Resources</Link>
        </div>
        </nav>
    </header>
  </div>
)
export default Header