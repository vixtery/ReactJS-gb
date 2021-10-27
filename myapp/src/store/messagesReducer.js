import { ADD_MESSAGE } from "./types/messagesTypes";

const initialState = {
  // будет храниться в виде {[chatId]: [{id, text, author}]}
  messageList: {
    "id0": [
      {
        id: 0,
        text: "Привет!",
        author: "RoboChat",
      },
      {
        id: 1,
        text: "Как дела?",
        author: "RoboChat",
      },
    ],
  },
};

function messegesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              id: currentList.length,
              text: action.message,
              author: action.author,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
}

export default messegesReducer;