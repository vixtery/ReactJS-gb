import { ADD_CHAT, DELETE_CHAT, GET_CHAT } from "../store/types/chatsTypes";

export const getChat = (name) => ({
  type: GET_CHAT,
  payload: name,
});

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});
