import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import FriendId from "../../../Atoms/FriendId";
import api from "../../../api";
import SelectedFriend from "../../../Atoms/SelectedFriend";
import Sender from "./Sender";
import Friendschat from "../../../Atoms/Chatfriends";
import { GetCorrect } from "../../Cheesy/LeaderBoardGetTop3";
import Url from "../../../Atoms/Url";

interface Friend {
  id: number;
  username: string;
  avatar: string;
}

function ChatTyping({
  socket,
  setSocket,
  Blockedusers,
  myId,
  BlockedMe,
}: {
  socket: any;
  setSocket: any;
  Blockedusers: any;
  myId: any;
  BlockedMe: any;
}) {
  const UsersData: Friend[] = useRecoilValue(Friendschat);
  const id = useRecoilValue(FriendId);
  const [allMessages, setAllMessages] = useState<any[]>([]);
  const Selectedfriend = useRecoilValue(SelectedFriend);
  const Friend:any = UsersData.find((f) => f.id === Selectedfriend);
  const url = useRecoilValue(Url);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const newSocket = new WebSocket(
      `ws://localhost:2500/ws/chat/${id}/${token}`
    );
    setSocket(newSocket);
    newSocket.onopen = function () {
      console.log("WebSocket connection established (tcha9lib blawr).");
    };

    const fetchInitialMessages = async () => {
      try {
        const response = await api.get(`messages/${id}/`);
        setAllMessages(
          response.data.sort(
            (a: { id: number }, b: { id: number }) => a.id - b.id
          )
        );
      } catch (error) {
        console.error("Error fetching initial messages:", error);
      }
    };
    fetchInitialMessages();

    newSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      const msg = {
        content: data["message"],
        timestamp: new Date(),
        sender: data["sender"],
      };
      setAllMessages((prevMessages) => [...prevMessages, msg]);
    };
    return () => {
      newSocket.close();
    };
  }, [id]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      console.error("WebSocket connection not open (ga3ma tcha9lib).");
      return;
    }

    const input = document.getElementById("message-input");
    const messageContent = (input as HTMLInputElement).value.trim();

    if (messageContent !== "") {
      const message = {
        content: messageContent,
      };
      socket.send(JSON.stringify(message));
      (input as HTMLInputElement).value = "";
    }
  };

  function extractTime(timestampString: any) {
    const dateObject = new Date(timestampString);
    const desiredTime = dateObject.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return desiredTime;
  }

  return (
    <>
      <div className="negotiator">
        <img src={GetCorrect(Friend?.avatar, url)} id="chatperson" />
        <div className="Friend-header-name">
          <h1>{Friend?.username || "Select a friend"}</h1>
          <h2>online</h2>
        </div>
      </div>
      <div className="Type-wrapper">
        <div className="Chat-box">
          {allMessages.map((msg: any, index) => (
            <Sender
              key={index}
              message={msg.content}
              time={extractTime(msg.timestamp)}
              sender={msg.sender}
              currentUserId={id}
            />
          ))}
        </div>
        <form onSubmit={sendMessage} id="Chat-input">
          <div className="chatInputButtonContainer">
            <input
              id="message-input"
              type="text"
              disabled={Blockedusers.some(
                (user: any) => user.id === Selectedfriend
              )}
              placeholder="Type Something ..."
              />
            <button type="submit" className="Chat-send-button">
              <img src="/Send-button.svg" id="bottona" />
            </button>
            <button type="submit" className="Chat-send-button">
              <img src="/GameInvite.svg" id="bottona-dyal-les-jox" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ChatTyping;
