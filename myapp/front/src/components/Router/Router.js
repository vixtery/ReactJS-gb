import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatPage from "../ChatPage/ChatPage";
import Chats from "../Chats/Chats";
import Profile from "../Profile/Profile";
import NotFound from "../NotFoundPage/NotFoundPage";
import DogInfo from "../DogInfo/DogInfo";
import PrivateRouter from "./PrivatRouter";
import HomePage from "../HomePage/HomePage";



function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <PrivateRouter exact path="/profile" component={Profile}></PrivateRouter>
      <PrivateRouter exact path="/chats" component={Chats}></PrivateRouter>
      <PrivateRouter
        exact
        path="/chats/:chatId"
        component={ChatPage}
      ></PrivateRouter>
      <PrivateRouter
        exact
        path="/info"
        component={DogInfo}
      ></PrivateRouter>
      <PrivateRouter path="*" component={NotFound}></PrivateRouter>
    </Switch>
  </BrowserRouter>
);
}

export default Router;


