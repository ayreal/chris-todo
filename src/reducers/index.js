import { combineReducers } from "redux";

const currentUserReducer = (state = {}, action) => {
  // console.log("currentUserReducer state\n", state, "and action", action);
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, isFetching: true };
    case "LOGIN_USER":
      return { ...action.user };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

// A toggle
// return state.map(todo =>
//   (todo.id === action.id)
//     ? {...todo, completed: !todo.completed}
//     : todo
// )

// const updatedItems = state.map(item => {
//   if(item.id === action.id){
//     return { ...item, ...action.payload }
//   }
//   return item
// })
// return updatedItems

const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALL_LISTS":
      return [...action.lists];
    case "ADD_LIST":
      return [...state, action.list];
    case "UPDATE_LIST":
      return state.map(
        list =>
          list.id === action.list.id
            ? { ...list, items: action.list.items }
            : list
      );
    case "REMOVE_LIST":
      return [...state.filter(list => list.id !== action.id)];
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
