import './mainNav.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
  <div className="navbar">
    <ul className="nav">

      <div className="topNav">
        <a className="navBrand" href="#Home"> <img src={require('../images/logo.png')} className='navImg'/> Gastronomic Alchemy </a>
      <div className="topRightNav">

        <li className="navItem">
          <a href="#Home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active text-dark' : 'nav-link'}>
            Home
          </a>
        </li>

        <li className="navItem">
          <a href="#About" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active text-dark' : 'nav-link'}>
            About
          </a>
        </li>

        <li className="navItem">
          <a href="#Login" onClick={() => handlePageChange('Login')} className={currentPage === 'Login' ? 'nav-link active text-dark' : 'nav-link'}>
            Login
          </a>
        </li>
      </div>
      </div>

        <div className="bottomNav">
        <li className="navItem">
          <a href="#EasyDinner" onClick={() => handlePageChange('EasyDinner')} className={currentPage === 'EasyDinner' ? 'nav-link active text-dark' : 'nav-link'}>
            EasyDinner
          </a>
        </li>

        <li className="navItem">
          <a href="#BreakfastHero" onClick={() => handlePageChange('BreakfastHero')} className={currentPage === 'BreakfastHero' ? 'nav-link active text-dark' : 'nav-link'}>
            BreakfastHero
          </a>
        </li>

        <li className="navItem">
          <a href="#DateNight" onClick={() => handlePageChange('DateNight')} className={currentPage === 'DateNight' ? 'nav-link active text-dark' : 'nav-link'}>
            DateNight
          </a>
        </li>
        
        <li className="navItem">
          <a href="#DinnerParty" onClick={() => handlePageChange('DinnerParty')} className={currentPage === 'DinnerParty' ? 'nav-link active text-dark' : 'nav-link'}>
            DinnerParty
          </a>
        </li>

        <li className="navItem">
          <a href="#Saved" onClick={() => handlePageChange('Saved')} className={currentPage === 'Saved' ? 'nav-link active text-dark' : 'nav-link'}>
            Saved
          </a>
        </li>
        </div>

    </ul>
  </div>
    );
  }
  
  export default NavTabs;
  