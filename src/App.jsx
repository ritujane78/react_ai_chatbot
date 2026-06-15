import React, { useState } from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBotApp from './components/ChatBotApp'

const App = () => {
  const [isChatting, setIsChatting] = useState(false);

  const handleGoBack = () => setIsChatting(false);
  const handleStart = () => setIsChatting(true);
  return (
    <div className='container'>
      {isChatting? (
        <ChatBotApp  onGoBack = {handleGoBack} />
      ) : (
        <ChatBotStart onStartApp = {handleStart} />  
      )};   
    </div>
  )
}

export default App
