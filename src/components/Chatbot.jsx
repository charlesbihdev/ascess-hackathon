"use client";
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Setting up the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "cBZaZ30so7zaSiOAKt1Hz",
      domain: "www.chatbase.co",
    };

    // Dynamically add the chatbot script to the document
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.setAttribute("chatbotId", "cBZaZ30so7zaSiOAKt1Hz");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything in the DOM
};

export default Chatbot;
