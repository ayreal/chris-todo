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

// OLD reducer before refactoring for reference

// const listReducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_ALL_LISTS":
//       return [...action.lists];
//     case "ADD_LIST":
//       return [...state, action.list];
//     case "UPDATE_LIST":
//       return state.map(
//         list =>
//           list.id === action.listId
//             ? { ...list, items: [...list.items, action.item] }
//             : list
//       );
//     case "REMOVE_LIST":
//       return [...state.filter(list => list.id !== action.id)];
//     default:
//       return state;
//   }
// };

// function insertItem(array, action) {
//     return [
//         ...array.slice(0, action.index),
//         action.item,
//         ...array.slice(action.index)
//     ]
// }
//
// function removeItem(array, action) {
//     return [
//         ...array.slice(0, action.index),
//         ...array.slice(action.index + 1)
//     ];
// }

const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALL_LISTS":
      return [...action.lists];
    case "ADD_LIST":
      return [...state, action.list];
    case "UPDATE_LIST":
      console.log("UPDATE LIST, action is: ", action);
      return state.map(list => {
        if (list.id !== action.payload.listId) {
          return list;
        }

        return {
          ...list,
          items: [...list.items, action.payload.item]
        };
      });
    case "REMOVE_LIST":
      return state.filter(list => list.id !== action.id);
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
