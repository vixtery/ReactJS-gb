import { UPDATE_MESSAGE } from "./types/messagesTypes";

// const initialState = {

//   messageList: {
//     "id0": [
//       {
//         id: 0,
//         text: "Привет!",
//         author: "DogChat",
//       },
//       {
//         id: 1,
//         text: "Как дела?",
//         author: "DogChat",
//       },
//     ],
//   },
// };
const initialState = { messageList: null };
function messegesReducer(state = initialState, action) {
  switch (action.type) {
    // case ADD_MESSAGE: {
    //   const currentList = state.messageList[action.chatId] || [];
    //   return {
    //     ...state,
    //     messageList: {
    //       ...state.messageList,
    //       [action.chatId]: [
    //         ...currentList,
    //         {
    //           id: currentList.length,
    //           text: action.message,
    //           author: action.author,
    //         },
    //       ],
    //     },
    //   };
    // };
    case UPDATE_MESSAGE: {
      return { ...state, messageList: action.payload };
    }

    default:
      return state;
  }
}

export default messegesReducer;