import React, { useState } from 'react'
import Sidebar from '../components/sidebar.jsx'
import Rightsidebar from '../components/Rightsidebar.jsx'
import ChatContainer from '../components/chatContainer.jsx'
const Homepage = () => {
      const[ selectedUser, setSelectedUser ] = useState(false);


  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`background-blur-xxl border-2 border-black-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
            <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <Rightsidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>
    </div>
  )
}

export default Homepage
