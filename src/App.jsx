import React, { useState } from 'react';
import ChatBotStart from './components/ChatBotStart';
import ChatBotApp from './components/ChatBotApp';

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);

  const handleGoBack = () => setIsChatting(false);

  const handleStart = () => {
    setIsChatting(true);

    if (chats.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}`,
        messages: [],
      };

      setChats([newChat]);
    }
  };

  return (
    <div className="container">
      {isChatting ? (
        <ChatBotApp
          onGoBack={handleGoBack}
          chats={chats}
          setChats={setChats}
        />
      ) : (
        <ChatBotStart onStartApp={handleStart} />
      )}
    </div>
  );
};

export default App;