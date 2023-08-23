import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Chat() {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { 0: id } = useParams();

    if (messages.length === 0) {
        axios
            .post(`http://127.0.0.1:8000/chatpaper/${id}.pdf`, {
                query: "",
            })

            .then((response) => {
                setMessages([
                    {
                        message: `Hello 👋, I am Chat Paper. This is the summary of this paper: \n ${response.data.summary}`,
                        sentTime: "just now",
                        sender: "ChatGPT",
                    },
                ]);
                setIsTyping(false);
                setIsLoading(false);
            });
    }

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: "outgoing",
            sender: "user",
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);
        setIsTyping(true);
        await processMessageToChatGPT(message, newMessages);
    };

    async function processMessageToChatGPT(query, chatMessages) {
        await axios
            .post(`http://127.0.0.1:8000/chatpaper/${id}.pdf`, { query })

            .then((response) => {
                setMessages([
                    ...chatMessages,
                    {
                        message: response.data.answer,
                        sender: "ChatGPT",
                    },
                ]);
                setIsTyping(false);
            });
    }

    // return (
    //     <div
    //         style={{
    //             position: "relative",
    //             height: "750px",
    //             width: "700px",
    //         }}
    //     >
    //         <MainContainer>
    //             <ChatContainer>
    //                 <MessageList
    //                     scrollBehavior="smooth"
    //                     typingIndicator={
    //                         isTyping ? (
    //                             <TypingIndicator content="ChatGPT is typing" />
    //                         ) : null
    //                     }
    //                 >
    //                     {messages.map((message, i) => {
    //                         return <Message key={i} model={message} />;
    //                     })}
    //                 </MessageList>
    //                 <MessageInput
    //                     placeholder="Type message here"
    //                     onSend={handleSend}
    //                 />
    //             </ChatContainer>
    //         </MainContainer>
    //     </div>
    // );
    return (
        <div
            style={{
                position: "relative",
                height: "750px",
                width: "700px",
            }}
        >
            {isLoading ? (
                <div className="loading">Loading...</div>
            ) : (
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={
                                isTyping ? (
                                    <TypingIndicator content="ChatGPT is typing" />
                                ) : null
                            }
                        >
                            {messages.map((message, i) => (
                                <Message key={i} model={message} />
                            ))}
                        </MessageList>
                        <MessageInput
                            placeholder="Type message here"
                            onSend={handleSend}
                        />
                    </ChatContainer>
                </MainContainer>
            )}
        </div>
    );
}

export default Chat;
