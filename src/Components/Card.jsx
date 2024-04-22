import React from "react";

const Card = ({ dentist, favs, setFavs }) => {
  const addFav = () => {
    const newFavs = [...favs, dentist];
    setFavs(newFavs);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  }

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="DH Logo" />
      <h2>{dentist.name}</h2>
      <h3>{dentist.username}</h3>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
}

export default Card;