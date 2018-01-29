import { combineReducers } from "redux";

const currentUserReducer = (state = {}, action) => {
  // console.log("currentUserReducer state\n", state, "and action", action);
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, isFetching: true };
    case "LOGIN_USER":
      console.log("Action.user is", action.user);
      return { ...action.user };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALL_LISTS":
      console.log("Action.events is", action.events);
      return [...action.lists];
    // case "ADD_LIST":
    //   console.log("Action.events is", action.events);
    //   return [...action.events];
    // case "UPDATE_LIST":
    //   console.log("Action.events is", action.events);
    //   return [...action.events];
    // case "REMOVE_LIST":
    //   console.log("Action.events is", action.events);
    //   return [...action.events];
    default:
      return state;
  }
};

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case "RAISE_ERROR":
      console.log("Action.events is", action.events);
      return [...action.events];
    case "REMOVE_ERROR":
      console.log("Action.events is", action.events);
      return [...action.events];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  lists: listReducer,
  errors: errorReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePaintingId: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
