import React, { useContext, useEffect, useState } from 'react';
// import { ContextGlobal } from '../Components/utils/global.context';


const Detail = ({ match }) => {
  const [dentists, setDentists] = useState(null);
  const { theme } = useContext();

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dentist');
        }
        const dentistData = await response.json();
        setDentists(dentistData);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchDentist();
  }, [match.params.id]);

  return (
    <div className={`dentistdetails ${theme}`}>
      <h1>Detail Dentist id {match.params.id}</h1>
            {dentists && (
              <div>
                <div className="card">
                  <img src="./images/doctor.jpg" alt="Dentist" />
                  <h2>{dentists.name}</h2>
                  <h3>{dentists.email}</h3>
                  <h3>{dentists.phone}</h3>
                  <h3>{dentists.website}</h3>
                </div>
              </div>
            )}
          </div>
        );
      };

export default Detail;