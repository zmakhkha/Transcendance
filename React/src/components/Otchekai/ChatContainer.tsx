import FriendBar from "../Cheesy/FriendBar";
import SideBar from "../Cheesy/SideBar";
import TopBar from "../SearchBar/TopBar";

function ChatContainer() {
  return (
    <>
      <div className="AppClass">
        <SideBar />
        <div className="main">
          <TopBar />
          <ChatSystem />
        </div>
      </div>
    </>
  );
}

export default ChatContainer;

function ChatSystem() {
  return (
    <>
      <div className="Chat-wrapper">
        <div className="Chat-headers">
          <h1 id="Chatlogo">Chats</h1>
          <div className="Friend-header">
            <div className="Friend-header-img">
              <img src="/bacharG.svg" id="bachar" />
            </div>
            <div className="Friend-header-name">
              <li>Micheal The Nigger</li>
              <p>online</p>
            </div>
          </div>
        </div>
        <div className="Chat-container">
          <ChatFriends />
          <ChatTyping />
        </div>
      </div>
    </>
  );
}

function ChatFriends() {
  return (
    <>
      <div className="Friends-wrapper">
        <p id="LastMessages">Last Messages</p>
        <div className="Chat-Friendslist">
          <div className="Friend-img">
            <img src="/bacharG.svg" id="bachar" />
          </div>
          <div className="Name-messages">
            <li id="Friend-name">Micheal The Nigger</li>
            <p id="Last-message">mbanch lik dek mahdi bghit n...</p>
          </div>
        </div>
        <div className="Chat-Friendslist">
          <div className="Friend-img">
            <img src="/bacharG.svg" id="bachar" />
          </div>
          <div className="Name-messages">
            <li id="Friend-name">Micheal The Nigger</li>
            <p id="Last-message">huh ?</p>
          </div>
        </div>
        <div className="Chat-Friendslist">
          <div className="Friend-img">
            <img src="/bacharG.svg" id="bachar" />
          </div>
          <div className="Name-messages">
            <li id="Friend-name">Micheal The Nigger</li>
            <p id="Last-message">Hey There Im Using Whatsapp!</p>
          </div>
        </div>
        <div className="Chat-Friendslist">
          <div className="Friend-img">
            <img src="/bacharG.svg" id="bachar" />
          </div>
          <div className="Name-messages">
            <li id="Friend-name">Micheal The Nigger</li>
            <p id="Last-message">Hey There Im Using Whatsapp!</p>
          </div>
        </div>
        <div className="Chat-Friendslist">
          <div className="Friend-img">
            <img src="/bacharG.svg" id="bachar" />
          </div>
          <div className="Name-messages">
            <li id="Friend-name">Micheal The Nigger</li>
            <p id="Last-message">Hey There Im Using Whatsapp!</p>
          </div>
        </div>
      </div>
    </>
  );
}

interface MessageInfo {
  name: string;
  message: string;
  time: string;
}

function Receiver({ name, message, time }: MessageInfo) {
  return (
    <>
      <div className="Receiver">
        <div className="First-message">
          <p>{message}</p>
        </div>
        <div className="Receiver-name-img">
          <div className="First-message-img">
            <img src="/bacharG.svg" id="bachar" />
          </div>
          <div className="First-message-name">
            <li>{name}</li>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Sender({ name, message, time }: MessageInfo) {
  return (
    <>
      <div className="Sender">
        <div className="Sender-container">
          <div className="Sender-message">
            <p>{message}</p>
          </div>
          <div className="Sender-name-img">
            <div className="Sender-message-name">
              <p>{time}</p>
              <li>{name}</li>
            </div>
            <div className="Sender-message-img">
              <img src="/bacharG.svg" id="bachar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ChatTyping() {
  return (
    <>
      <div className="Type-wrapper">
        <div className="Chat-box">
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
          <Receiver
            name="Micheal"
            time="8:45 AM"
            message="moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw 
            moraw moriw moraw moriw moraw moriw moraw moriw moraw moriw"
          />
          <Sender name="Me" time="8:48 AM" message="Sebat sberdilla" />
        </div>
        <div className="Chat-input">
          <div className="Input-box">
            <input type="text" placeholder="Type Something ..." />
          </div>
        </div>
      </div>
    </>
  );
}
