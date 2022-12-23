import React from 'react'
import Chats from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar />
            <Chats />
        </div>
    </div>
  )
}

export default Home