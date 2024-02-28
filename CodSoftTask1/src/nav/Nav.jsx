import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import astronautHelmet from '../assets/astronaut-helmet.png'
import deadEye from '../assets/dead-eye.png'
import stck from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import '../styles/nav.css'
const Nav = () => {

  const location = useLocation();
  const getNavPositionClass =()=>{
    switch(location.pathname){
      case '/':
        return "nav-about";
        case '/skills':
          return "nav-skills";
          case '/projects':
        return "nav-projects";
        case '/contacts':
        return "nav-contact";
        default:
        return "";
    }
      
  }

  const getPageTitle =()=>{
    switch(location.pathname){
      case '/':
        return "ABOUT";
        case '/skills':
          return "SKILLS";
          case '/projects':
        return "PROJECTS";
        case '/contacts':
        return "CONTACT";
        default:
        return "";
    }
  }

  const NavPositionClass = getNavPositionClass();

  const PageTitle = getPageTitle()

  const isCurrentPage =(navClass)=>{
    return navClass===NavPositionClass;
  }

  const renderNavLink =(to, imgSrc, altText, navClass)=>{
    const isCurrent = isCurrentPage(navClass)
    const linkClass = isCurrent? 'nav-link current': 'nav-link'

    return <Link to={to} className={linkClass}>
      <img src={imgSrc} alt={altText}></img>
    {isCurrent && <h1 className='page-title'>{PageTitle} </h1>}

    </Link>
  }

  return (
    // <div>
    //   <img src={astronautHelmet}></img>
    //   <img src={deadEye}></img>
    //   <img src={stck}></img>
    //   <img src={envelope}></img>
    // </div>

    <nav className={`nav ${NavPositionClass}`}>
      {renderNavLink(
        '/',
        astronautHelmet,
        'astronaut helmet icon ',
        'nav-about'

      )}
      {renderNavLink(
        '/skills',
        deadEye,
        'dead eye icon ',
        'nav-skills'

      )}
      {renderNavLink(
        '/projects',
        stck,
        'stack icon ',
        'nav-projects'

      )}
      {renderNavLink(
        '/contacts',
        envelope,
        'envelope icon ',
        'nav-contact'

      )}
    </nav>
  )
}

export default Nav
