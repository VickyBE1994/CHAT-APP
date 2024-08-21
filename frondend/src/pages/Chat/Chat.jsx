import React from 'react'
import './Chat.css'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Chatbox from '../../components/chatbox/Chatbox'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <Leftsidebar/>
        <Chatbox/>
        <RightSidebar/>
        
      </div>
      
    </div>
  )
}

export default Chat
