import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_SINGLE,
} from "../constants/actionTypes";

export const getMembers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMembers();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMember = (member) => async (dispatch) => {
  try {
    const { data } = await api.createMember(member);

    dispatch({ type: CREATE, payload: data });
    dispatch(getMembers());
  } catch (error) {
    console.log(error);
  }
};

export const updateMember = (id, member) => async (dispatch) => {
  try {
    const { data } = await api.updateMember(id, member);

    dispatch({ type: UPDATE, payload: data });
    dispatch(getMembers());
  } catch (error) {
    console.log(error);
  }
};

export const deleteMember = (id) => async (dispatch) => {
  try {
    await api.deleteMember(id);

    dispatch({ type: DELETE, payload: id });
    dispatch(getMembers());
  } catch (error) {
    console.log(error);
  }
};

export const getSingleMember = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleMember(id);
    dispatch({ type: FETCH_SINGLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
