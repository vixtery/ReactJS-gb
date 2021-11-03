import { ADD_CHAT, DELETE_CHAT, UPDATE_CHAT } from "./types/chatsTypes";

const InitialState = { chatList: [
  { id: "id0", name: "Январь" },
  { id: "id1", name: "Февраль" },
  { id: "id2", name: "Март" },
  { id: "id3", name: "Апрель" },
  { id: "id4", name: "Май" },
  { id: "id5", name: "Июнь" },
  { id: "id6", name: "Июль" },
  { id: "id7", name: "Август" },
  { id: "id8", name: "Сентябрь" },
  { id: "id9", name: "Октябрь" },
  { id: "id10", name: "Ноябрь" },
  { id: "id11", name: "Декабрь" },
] };
let count = 0; 

function chatsReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_CHAT:
      count++;
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${count}`,
            name: action.payload,
          },
        ],
      };

    case DELETE_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter((el) => el.id !== action.payload),
      };
    
    case UPDATE_CHAT:
      return {
        chatList: action.payload
      };

    default:
      return state;
  }
}

export default chatsReducer;