import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Card = ({ dentista }) => {
  const [favs, setFavs] = useState(() => {
    const savedFavs = localStorage.getItem('favs');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  const addFav = () => {
    const newFavs = [...favs, dentista];
    setFavs(newFavs);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  }

  return (
    <> 
   
    <Link to={`/detail/${dentista.id}`}> 
    <div className="card">
      <img className="card-img" src="./images/doctor.jpg" alt="DH Logo" />
      <p>{dentista.name}</p>
      <p>{dentista.username}</p>
      <p>{dentista.id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
    </Link>

    </>
  );
}

export default Card;