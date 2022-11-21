import React from 'react'
import Card from '../components/Card'

const Home = ( {user} ) => {
  return (
    <div className='home'>
        <Card user={user} />
    </div>
  )
}

export default Home