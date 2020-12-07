import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return { ...posts };
    case DELETE:
      return { ...posts };
    case LIKE:
      return { ...posts };
    default:
      return posts;
  }
};

export default reducer;
