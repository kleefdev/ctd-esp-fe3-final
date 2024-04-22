import React, { useState } from "react";

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
    <div className="card">
      <img className="card-img" src="./images/doctor.jpg" alt="DH Logo" />
      <h2>{dentista.name}</h2>
      <h3>{dentista.username}</h3>
      <h3>{dentista.id}</h3>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
}

export default Card;