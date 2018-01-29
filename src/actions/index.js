// look at Dan Abramov and Alex's notes
// adding or deleting a list should find that specific KI from the store and add/remove it
// lists: [{...}, {...}, ...]
import {
  ASYNC_START,
  LOGIN_USER,
  LOGOUT_USER,
  RETURN_ERROR,
  ADD_ALL_LISTS,
  ADD_LIST,
  UPDATE_LIST,
  REMOVE_LIST
} from "./types";
import * as adapter from "../services";

// AUTH

// export function signupUser(data, history) {
//   return dispatch => {
//     console.log("inside actions/functions, signupUser");
//     console.log("--------------------------------------");
//
//     adapter.signupUser(data).then(payload => {
//       console.log("response from signup is: ", payload);
//       localStorage.setItem("token", payload.token);
//       dispatch({ type: LOGIN_USER, user: payload.user });
//       history.push("/");
//     });
//   };
// }
//
export function fetchProfile(data, history) {
  return dispatch => {
    dispatch({ type: ASYNC_START });
    adapter.loginUser(data).then(payload => {
      if (payload.error) {
        // handle errors here
        dispatch({ type: RETURN_ERROR, error: payload.error });
      } else {
        localStorage.setItem("token", payload.token);
        history.push("/lists");
      }
    });
  };
}

export function fetchCurrentUser() {
  return dispatch => {
    adapter.fetchCurrentUser().then(payload => {
      debugger;
      dispatch({ type: LOGIN_USER, user: payload.id });
      dispatch({ type: ADD_ALL_LISTS, lists: payload.lists });
    });
  };
}

export const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
};

// Get all lists from API

// Create a new list
// Either the list is from scratch or it begins as a copy of an existing list
// This is handled on by the API based on which params are present

// Update a current list with a new item

// Update a current list with items from an existing list

// Remove an item from a list

// Remove a list
