import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
         Portfolio
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/skills'>
                SKILLS
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/experience'>
                EXPERIENCE
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/projects'>
                PROJECT
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/contact'>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
