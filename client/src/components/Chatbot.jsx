import { useState, useRef, useEffect } from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import '../css/chatbot.css';

function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [inputInitHeight, setInputInitHeight] = useState(0);
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);

  const API_KEY = "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//removeit"; // Paste your API key here

  useEffect(() => {
    setInputInitHeight(chatInputRef.current.scrollHeight);
  }, []);

  // Function to create a chat message
  const createChatLi = (message, className) => {
    return (
      <li className={`chat ${className}`}>
        {className === "outgoing" ? null : <span className="material-symbols-outlined">smart_toy</span>}
        <p>{message}</p>
      </li>
    );
  }

  // Function to generate response from the chatbot API
  const generateResponse = (message) => {
    // API endpoint URL
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      })
    }

    fetch(API_URL, requestOptions)
      .then(res => res.json())
      .then(data => {
        // Create a new chat message with the response
        const chatLi = document.createElement("li");
        chatLi.className = "chat incoming";
        const chatContent = document.createElement("div");
        createRoot(chatContent).render(createChatLi(data.choices[0].message.content.trim(), "incoming"));
        chatLi.appendChild(chatContent);
        chatboxRef.current.appendChild(chatLi);
        chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      })
      .catch(() => {
        // Handle error if API call fails
        const chatLi = document.createElement("li");
        chatLi.className = "chat incoming";
        
        const errorMessage = "Oops! Something went wrong. Please try again.";
      
        // Create a React element for the error message
        const errorElement = (
          <p className="error">{errorMessage}</p>
        );
      
        // Render the error element
        createRoot(chatLi).render(errorElement);
        
        // Append the chatLi to chatboxRef
        chatboxRef.current.appendChild(chatLi);
        chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      });
      
      
  }

  // Function to handle user sending a message
  const handleChat = () => {
    if (!userMessage) return;

    // Create an outgoing chat message
    const chatLi = document.createElement("li");
    chatLi.className = "chat outgoing";
    const chatContent = document.createElement("div");
    createRoot(chatContent).render(createChatLi(userMessage, "outgoing"));
    chatLi.appendChild(chatContent);
    chatboxRef.current.appendChild(chatLi);
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

    // Clear the input field
    setUserMessage("");

    // Display "Thinking..." message and generate response after a delay
    setTimeout(() => {
      const incomingChatLi = document.createElement("li");
      incomingChatLi.className = "chat incoming";
      const incomingChatContent = document.createElement("div");
      createRoot(incomingChatContent).render(createChatLi("Thinking...", "incoming"));
      incomingChatLi.appendChild(incomingChatContent);
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      generateResponse(userMessage);
    }, 600);
  }

  // Function to handle input change in the textarea
  const handleInputChange = () => {
    const input = chatInputRef.current;
    input.style.height = `${inputInitHeight}px`;
    input.style.height = `${input.scrollHeight}px`;
  }

  // Function to handle key down events
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  }

  // JSX structure for the chatbot component
  return (
    <div>
      <button className="chatbot-toggler" onClick={() => document.body.classList.toggle("show-chatbot")}>
        <IoChatboxOutline size={30} className="material-symbols-rounded" />
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          {window.innerWidth <= 490 && (
            <IoMdClose className="close-btn material-symbols-outlined" onClick={() => document.body.classList.remove("show-chatbot")} />
          )}
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          {/* Default message */}
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Hi there 👋<br />How can I help you today?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            ref={chatInputRef}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInputChange}
            value={userMessage}
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
