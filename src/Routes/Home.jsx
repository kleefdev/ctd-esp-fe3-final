import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const { dentistas, theme } = useContextGlobal()

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map(dentist => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home