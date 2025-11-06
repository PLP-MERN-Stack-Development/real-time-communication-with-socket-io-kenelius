import React from 'react'
import assets from '../assets/assets.js'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-centre gap-3 mx-4 border-b border-stone-500'>
      <img src={assets.profile_martin} alt='' className='w-[40px] aspect-[1/1] rounded-full '/>
      <p className='lex-1  text-lg text-white flex items-centre gap-2'>martin johnson
        <span className='w-2 h-2 rounded-full bg-green-500'></span>
      </p>
      <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="" className='md:hiddenn max-w-7 cursor-pointer'/>
      <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
      </div>
    </div>
  ) :(
    <div className='flex flex-col items-centre justify-centre gap-2 text-gray-500'>
      <img src={assets.logo_icon} alt="" className='max-w-16'/>
      <p className='text-lg font-medium text-white'>Select a user to start chatting</p>
    </div>
  )
}

export default ChatContainer
