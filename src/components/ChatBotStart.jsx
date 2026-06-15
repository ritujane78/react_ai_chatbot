import React from 'react'
import './ChatBotStart.css'

const ChatBotStart = ({onStartApp}) => {
  return (
    <div className='start-page'>
        <button className="start-page-btn" onClick={onStartApp}>
            Chat AI
        </button>
      
    </div>
  )
}

export default ChatBotStart
