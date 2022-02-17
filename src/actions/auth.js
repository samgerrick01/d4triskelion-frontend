import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

const Reload = () => {
  window.location.reload(false);
};

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
    Reload();
  } catch (error) {
    console.log(error);
    window.alert("Access Denied!");
    Reload();
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });
    navigate("/auth");
  } catch (error) {
    console.log(error);
  }
};
