// Imports from dependencies
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' style={{marginTop: '1%', opacity: '.7'}}>
      {/* Logo */}
      <div style={{marginLeft: '1%', fontFamily: 'fantasy'}}>
        <Link to='/' className='navbar-brand' style={{fontSize: '200%', color: 'white'}}>
         Member Registration
        </Link>
      </div>
      

      {/* Menu */}
      <div className='collapse navbar-collapse' style={{marginLeft: '3%', fontSize: '200%'}}>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;