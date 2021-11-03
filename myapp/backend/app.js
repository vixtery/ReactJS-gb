const express = require("express"); // импорт фреймворка express
const logger = require("morgan"); //  импорт фреймворка morgan (показывает запросы в консоли)
const app = express();
const cors = require("cors"); // импорт cors для того что бы на бэк могли обращаться с любого хоста

app.use(express.urlencoded({ extended: false })); //это метод, встроенный в express для распознавания входящего объекта запроса в виде строк или массивов.
app.use(express.json()); //метод, встроенный в express для распознавания входящего объекта запроса как объекта JSON.
app.use(cors()); // мидлвар, пропускает все запросы через cors
app.use(logger("dev")); // мидлвар, показывает запросы в консоли через фреймворк morgan (dev = вариант отображения)

const users = [{ email: "mail@mail.ru", password: "123657" }];
const chats = { chatList: [{ id: "id", name: "Dog Chat" }] };
const messages = {
  // будет храниться в виде {[chatId]: [{id, text, author}]}
  messageList: {
    ["id"]: [
      {
        id: 0,
        text: "Добро пожаловать!",
        author: "Dog Chat",
      },
      {
        id: 1,
        text: "Сегодня прекрасная погода!",
        author: "Dog Chat",
      },
    ],
  },
};

//авторизация
app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    }
  }
  res.sendStatus(400);
});

//ЧАТЫ
app.get("/chats", (req, res) => {
  return res.json(chats.chatList);
});

app.post("/chats", (req, res) => {
  const { chatName } = req.body;
  if (chatName) {
    chats.chatList.push({ id: `id${chats.chatList.length}`, name: chatName });
    return res.json(chats.chatList);
  }
});

app.delete("/chats", (req, res) => {
  const { id } = req.query; // query - объект, содержащий все параметры запроса(после знака ?)
  if (id) {
    chats.chatList = chats.chatList.filter((el) => el.id !== id);
    delete messages.messageList[id];
    return res.json(chats.chatList);
  }
});

//СООБЩЕНИЯ
app.get("/messages", (req, res) => {
  return res.json(messages.messageList);
});

app.post("/messages", (req, res) => {
  const { chatId, text, author } = req.body;
  if (chatId && author) {
    const currentList = messages.messageList[chatId] || [];
    messages.messageList = {
      ...messages.messageList,
      [chatId]: [
        ...currentList,
        {
          id: currentList.length,
          text: text,
          author: author,
        },
      ],
    };
  }
  return res.json(messages.messageList);
});

app.listen(3001, () => {
  console.log("server start");
});