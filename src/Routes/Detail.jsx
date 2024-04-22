import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentista(data));
  }, [id]);

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {dentista && (
        <div>
          <p>Name: {dentista.name}</p>
          <p>Email: {dentista.email}</p>
          <p>Phone: {dentista.phone}</p>
          <p>Website: {dentista.website}</p>
        </div>
      )}
    </>
  )
}

export default Detail;