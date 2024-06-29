import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Url from "../../Atoms/Url";
import { GetCorrect } from "./LeaderBoardGetTop3";
import { BsPersonFillAdd } from "react-icons/bs";

import api from "../../api";
import GetCircles from "./GetCircles";



interface UserProps {
  show: string;
  setRender: React.Dispatch<React.SetStateAction<string>>;
  data: {
    username: string;
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    level: number;
    coins: number;
    email: string;
    win_rate: number;
    achievements_rate: number;
  };
}

function UserProfile({ show, setRender, data }: UserProps) {
  const profileLevelStyle = { justifyContent: "space-between" };
  let levelStart = Math.floor(data.level / 10);
  const url = useRecoilValue(Url);
  const [pending, setPending] = useState<boolean>(false);
  const [friends, setFriends] = useState<any>({});
  let Dont: boolean = false;
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const getFriends = async () => {
    try {
      const response = await api.get("player/friends/");
      setFriends(response.data?.friends);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFriends();
    const token = localStorage.getItem("token");
    const newSocket = new WebSocket(
      `ws://localhost:2500/ws/friend-reqs/${token}`
    );
    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    };
    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };
    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    setSocket(newSocket);

    return () => {
      if (newSocket) newSocket.close();
    };
  }, []);

  const sendRequest = () => {
    setPending(true);
    if (socket) {
      socket.send(
        JSON.stringify({
          action: "create",
          friend: data.id,
        })
      );
    }
  };

  if (Array.isArray(friends)) {
    friends?.map((friend: any) => {
      if (friend.username === data.username) Dont = true;
    });
  }

  return (
    <div id="Profile">
      <div className="profile-left">
        <div id="profile-usr">
          <img
            id="profile-img"
            src={GetCorrect(data.avatar, url)}
            alt="profilePic"
          />
          <h1 id="user-name">{data.username}</h1>
        </div>
        <div className="line1">
          <div className="line2"></div>
          <div onClick={sendRequest}>
            {!pending && !Dont && (
              <div id="ProfileaddFriend">
                <BsPersonFillAdd />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="profile-right">
        <div className="profile-level" style={profileLevelStyle}>
          <div></div>
          <div id="profile-level-container">
            <div id="profile-level-text">
              <h2>Level {Math.floor(data.level / 1000)}</h2>
              <h2>{levelStart}/1000</h2>
            </div>
            <div id="profile-level-bar">
              <progress id="progress-bar" value={levelStart} max={1000} />
            </div>
          </div>
          <div id="profile-tabs">
            <button
              className={`${show === "History" && "ProfileToRender"} `}
              onClick={() => setRender("History")}
            >
              History
            </button>
            <button
              className={`${show === "Trophies" && "ProfileToRender"}  `}
              onClick={() => setRender("Trophies")}
            >
              Trophies
            </button>
            <button
              className={`${show === "Items" && "ProfileToRender"}`}
              onClick={() => setRender("Items")}
            >
              Items
            </button>
          </div>
        </div>
        {GetCircles(data)}
      </div>
    </div>
  );
}
export default UserProfile;
