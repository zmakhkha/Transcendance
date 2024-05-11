import { useRecoilState, useRecoilValue } from "recoil";
import ShopItems from "../../Atoms/ShopItems";
import FriendBar from "../Cheesy/FriendBar";
import SideBar from "../Cheesy/SideBar";
import TopBar from "../SearchBar/TopBar";
import { setAuthToken } from "../Utils/setAuthToken";
import axios from "axios";
import { useEffect, useState } from "react";

function ShopContainer() {
  return (
    <>
      <div className="AppClass">
        <SideBar />
        <div className="main">
          <TopBar />
          <ShopDesign />
        </div>
        <FriendBar />
      </div>
    </>
  );
}

export default ShopContainer;

function GetPaddle() {
  const data = useRecoilValue(ShopItems);
  const paddle = data.filter((item: any) => item?.type === "P");
  return (
    <>
      <ul>
        {paddle.map((item: any) => (
          <li key={item?.id}>
            <div className="Card-container">
              <div className="Item-img"></div>
              <div className="Item-value">
                <div className="Item-title">{item?.name}</div>
                <div className="Item-price">{item?.price}$</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
  // return (
  //   <>
  //     <div className="Paddles item">
  //       <h1 id="Paddles-header">Paddles</h1>
  //       <div className="Paddle-holder">
  //         <Card />
  //         <Card />
  //         <Card />
  //         <Card />
  //         <Card />
  //       </div>
  //     </div>
  //   </>
  // );
}

function GetBackground() {
  const data = useRecoilValue(ShopItems);
  const background = data.filter((item: any) => item?.type === "B");
  return (
    <>
      <div className="Background item">
        <h1 id="Paddles-header">Backgrounds</h1>
        <div className="Paddle-holder">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

function GetAvatar() {
  const data = useRecoilValue(ShopItems);
  const avatar = data.filter((item: any) => item?.type === "A");
  return (
    <>
      <div className="Avatar item">
        <h1 id="Paddles-header">Avatars</h1>
        <div className="Paddle-holder">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

function ShopDesign() {
  const [shopItems, setShopItems] = useRecoilState(ShopItems);

  setAuthToken();
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:2500/shop/");
      setShopItems(response.data.all_items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="Items">
            <GetPaddle />
            <GetBackground />
            <GetAvatar />
          </div>
        </div>
      </div>
    </>
  );
}

function Card() {
  return (
    <>
      <div className="Card-container">
        <div className="Item-img"></div>
        <div className="Item-value">
          <div className="Item-title">here</div>
          <div className="Item-price">20$</div>
        </div>
      </div>
    </>
  );
}
