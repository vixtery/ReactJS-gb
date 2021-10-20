import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header";
import Profile from "../Profile";
import RoboChat from "../Chat/RoboChat";
import Chats from "../Chat/Chats";



function Router() {


return (
    <div className="app">
      <h1 className="app_title">RoboChat</h1>
       <BrowserRouter>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats" > 
        <RoboChat />
        </Route>
        <Route exact path="/chats/:id" > 
        <Chats /> 
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default Router;