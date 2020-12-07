import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";
import * as api from "../api";

// ACTION CREATOR : FUNC RETURNS ACTION //

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // dispatch(action)
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { getPosts, createPost };
