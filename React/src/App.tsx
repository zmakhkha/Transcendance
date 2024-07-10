import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardContainer from "./components/Cheesy/DashboardContainer";
import ProfileContainer from "./components/Cheesy/ProfileContainer";
import ChatContainer from "./components/Otchekai/ChatContainer";
import GameContainer from "./components/Cheesy/GameContainer";
import LeaderBoardContainer from "./components/Cheesy/LeaderBoardContainer";
import NotFound from "./components/Cheesy/NotFound";
import Settings from "./components/Cheesy/Settings";
import ShopContainer from "./components/Otchekai/ShopContainer";
import Login from "./components/Mnassi/LoginRegister/Login";
import Register from "./components/Cheesy/Register";
import Users, { UsersLoader } from "./components/Cheesy/Users";
import ProfileLayout from "./components/Cheesy/ProfileLayout";
import ProtectedRoutes from "./components/Utils/ProtectedRoutes";
import Verify2FA from "./components/zmakhkha/Verify2FA";
import { Toaster } from "react-hot-toast";
import Error_403 from "./components/Cheesy/Error403";

import "./Imports";
import Gametst from "./components/zmakhkha/Gametst";
import Verify2FA2 from "./components/zmakhkha/Verify2FA2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/twoFa" element={<Verify2FA />} />
      <Route path="/twoFa2" element={<Verify2FA2 />} />
      <Route path="/403" element={<Error_403 />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/chat" element={<ChatContainer />} />
        <Route path="/game" element={<GameContainer />} />
        <Route path="/leaderboard" element={<LeaderBoardContainer />} />
        <Route path="/shop" element={<ShopContainer />} />
        <Route path="/gametst" element={<Gametst />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileContainer />} />
          <Route path=":username" element={<Users />} loader={UsersLoader} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          className: "toaster",
        }}
      />
    </>
  );
}

export default App;
