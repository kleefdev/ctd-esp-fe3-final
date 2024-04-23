import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { dispatch } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <> 
      <nav className='nav'>
        <Link to="/" className="site-title"><h2>DH Odonto</h2></Link>
        <ul>  
          <li><Link to='/'><h3>Home</h3></Link></li>
          <li><Link to='/contact'><h3>Contact</h3></Link></li>
          <li><Link to='/favs'><h3>Favs</h3></Link> </li>   
        </ul>
        <button className="tema-boton" onClick={handleThemeChange}>Change theme</button>   
      </nav>
    </>
  )
}

export default Navbar;