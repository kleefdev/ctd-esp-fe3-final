import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (

    <> 
      <nav className='nav'>

      <Link to="/" className="site-title"><h2>DH Odonto</h2></Link>

      <ul>  
          <li><Link to='/'><h3>Home</h3></Link></li>
          <li><Link to='/contact'><h3>Contact</h3></Link></li>
          <li><Link to='/favs'><h3>Favs</h3></Link> </li>   
      </ul>

      <button className="tema-boton">Change theme</button>   

      

    </nav>

    </>
  )
}

export default Navbar