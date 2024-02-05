function NavTabs({ currentPage, handlePageChange }) {
    return (
      <div class="navbar">
        <ul className="nav">
        <div className="first-nav">
      <a class="navbar-brand" href="./home.html">Gastronomic Alchemy</a>

        <li className="nav-item">
          <a
            href="#Home"
            onClick={() => handlePageChange('Home')}
            // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Home' ? 'nav-link active text-dark' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active text-dark' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            // Check to see if the currentPage is `Login`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Login' ? 'nav-link active text-dark' : 'nav-link'}
          >
            Login
          </a>
        </li>
        </div>
        <div className="second-nav">
        <li className="nav-item">
          <a
            href="#EasyDinner"
            onClick={() => handlePageChange('EasyDinner')}
            // Check to see if the currentPage is `EasyDinner`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'EasyDinner' ? 'nav-link active text-dark' : 'nav-link'}
          >
            EasyDinner
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#BreakfastHero"
            onClick={() => handlePageChange('BreakfastHero')}
            // Check to see if the currentPage is `BreakfastHero`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'BreakfastHero' ? 'nav-link active text-dark' : 'nav-link'}
          >
            BreakfastHero
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#DateNight"
            onClick={() => handlePageChange('DateNight')}
            // Check to see if the currentPage is `DateNight`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'DateNight' ? 'nav-link active text-dark' : 'nav-link'}
          >
            DateNight
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#DinnerParty"
            onClick={() => handlePageChange('DinnerParty')}
            // Check to see if the currentPage is `DinnerParty`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'DinnerParty' ? 'nav-link active text-dark' : 'nav-link'}
          >
            DinnerParty
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Saved"
            onClick={() => handlePageChange('Saved')}
            // Check to see if the currentPage is `Saved`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Saved' ? 'nav-link active text-dark' : 'nav-link'}
          >
            Saved
          </a>
        </li>
        </div>
      </ul>
      </div>
    );
  }
  
  export default NavTabs;
  