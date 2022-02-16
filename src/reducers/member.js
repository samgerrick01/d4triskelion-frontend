import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_SINGLE,
} from "../constants/actionTypes";

const reducer = (members = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
    case FETCH_SINGLE:
      return action.payload;
    case CREATE:
      return [...members, action.payload];
    case UPDATE:
      return (Array.isArray(members) ? members : []).map((member) =>
        member._id === action.payload._id ? action.payload : member
      );
    case DELETE:
      return members.filter((member) => member._id !== action.payload);
    default:
      return members;
  }
};

export default reducer;
