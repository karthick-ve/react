import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../service/service";

export const register = (username, password) => (dispatch) => {
  AuthService.register(username, password);
  dispatch({type: REGISTER_SUCCESS});
};

export const login = (username, password) => (dispatch) => {
  let user = JSON.parse(localStorage.getItem('user'));
  if(user && (user['username'] == username) && user['password'] == password){
    dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: user },
          });
  }else{
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: 'login failed',
    });
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};