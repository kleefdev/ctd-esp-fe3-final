import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (

    <>

    <nav className='nav'>
        <Link to="/" className="site-title"><h2>DH Odonto</h2></Link>
        <Link to='/'><h3>Home</h3></Link>  
        <Link to='/contact'><h3>Contact</h3></Link>  
        <Link to='/favs'><h3>Favs</h3> </Link>  
  

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la lmenta para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>

    </>
  )
}

export default Navbar