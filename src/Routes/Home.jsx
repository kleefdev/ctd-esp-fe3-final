import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import '<div className="" />
<inde></inde>

const Home = () => {
  const { dentists, theme } = useContextGlobal()

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home