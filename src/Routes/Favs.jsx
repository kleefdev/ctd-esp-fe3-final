import React from "react";
import Card from './../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Favs() {

  const favs = localStorage.getItem('favs');
  let parsedFavs = JSON.parse(favs) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {parsedFavs.map(dentistFav => (
          <Card dentist={dentistFav} key={dentistFav.id} />
        ))}
      </div>
    </>
  );
}

export default Favs;
