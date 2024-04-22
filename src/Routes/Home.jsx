import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
// import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {

    const [dentistas, setDentistas] = useState([]);

    useEffect(() => {

      axios.get("http://localhost:3001/Dentistas")
      .then(response => setDentistas(response.data))
      .catch(error => console.log(error))

    }, [])

  return (

    <> 
        
    <main>

        <h1>Home</h1>

      <div className='card-grid'>
        {  
        dentistas.map((dentista) => {
            return (

              <Card dentista={dentista} key={dentista.id}/>
            )
          })
        }
    </div> 
  </main>

    </>
  )
}

export default Home