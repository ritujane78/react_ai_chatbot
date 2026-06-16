# React AI Chatbot

A modern AI-powered chatbot built with React and Vite that enables users to create multiple chat sessions, interact with GPT models, manage chat history, use emojis, and persist conversations using Local Storage.

## Primary AI model: gpt-5.4-mini

## Features

-  AI-powered responses using OpenAI GPT models
-  Multiple chat sessions
-  Chat history sidebar
-  Create new chats
-  Delete existing chats
-  Emoji picker integration
-  Send messages using the Enter key
-  Local Storage persistence
- Fast development with Vite
-  Responsive and user-friendly interface

---

## Tech Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)

### Libraries

- emoji-picker-react
- uuid

### Development Tools

- ESLint
- React Hooks ESLint Plugin
- Vite React Plugin

---

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/ritujane78/react_ai_chatbot.git
cd react_ai_chatbot
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key
```

> Never expose your API key publicly.

### Start Development Server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

##  Usage

1. Launch the application.
2. Click **Chat AI** to start a conversation.
3. Create a new chat session.
4. Enter a prompt and press **Enter** or click the send button.
5. Receive AI-generated responses.
6. Use emojis to enhance messages.
7. Switch between chat sessions using the sidebar.
8. Delete chats when no longer needed.
9. Chats are automatically saved in Local Storage and restored on refresh.

---

## Features Implemented

### Chat Management

- Create new chat sessions
- Switch between chats
- Delete chats
- Maintain chat history

### AI Integration

- OpenAI GPT API integration
- Dynamic AI-generated responses

### User Experience

- Enter key support for sending messages
- Emoji picker support
- Responsive chat interface
- Typing-friendly workflow

### Persistence

- Local Storage integration
- Automatic chat restoration after page refresh

---

##  Screenshots

Add screenshots of your application here.

```md
![Home Page](screenshots/home.png)

![Chat Interface](screenshots/chat-interface.png)

![Emoji Picker](screenshots/emoji-picker.png)
```

---
