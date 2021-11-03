import CHANGE_NAME from "./types/profileTypes";

const InitialState = { name: "Введите кличку питомца" };

function profileReducer(state = InitialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAME:
      return { name: payload };
    default:
      return state;
  }
}

export default profileReducer;