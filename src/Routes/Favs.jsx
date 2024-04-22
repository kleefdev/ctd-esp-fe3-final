import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('favs');
    if (storedFavs) {
      setFavs(JSON.parse(storedFavs));
    }
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </>
  );
};

export default Favs;