import { BrowserRouter, Route } from "react-router-dom";
import ChatPage from "../Chat/ChatPage";
import Chats from "../Chat/Chats";
import Header from "../Header";
import Profile from "../Profile";
import NotFound from "../NotFoundPage/NotFoundPage";

function Router() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats" component={Chats}></Route>
        <Route exact path="/chats/:chatId" component={ChatPage}></Route>
        <Route path="*" component={NotFound}></Route>
    </BrowserRouter>
    
  );
}

export default Router;

