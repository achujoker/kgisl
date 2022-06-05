import { LIST_TYPE } from "../types/listTypes";

const intialState = {
  appointments: [],
};

const ListReducer = (state = intialState, action) => {
  switch (action.type) {
    case LIST_TYPE.SAVE_APPOINTMENTS: {
      return { ...state, appointments: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ListReducer;
