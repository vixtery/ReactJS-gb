import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import RoboChat from "./components/RoboChat";


function App() {

  const [messageList, setMessageList] = useState([{
    name: "RoboBot", text: "Привет!"}, { name: "RoboBot", text: "Сегодня прекрасная погода!" }]);

  useEffect(() => {
    if (messageList[messageList.length - 1].name !== "RoboBot") {
      setTimeout(() => {
        setMessageList((prev) => [...prev, { name: "RoboBot", text: "Как дела?" }])
      }, 2000);
    }
  }, [messageList]);

  return (
    <div className="app">
      <h1 className="app_title">RoboChat</h1>
       <Router>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats" > 
        <RoboChat />
        </Route>
        <Route exact path="/chats/:id" > 
        <Chats /> 
        </Route>
      </Router>
    </div>
  );
}

export default App;