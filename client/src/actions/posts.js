import * as api from "../api";

// Action creators
// syntax de fou
const getPosts = () => async (dispatch) => {
  const action = { type: "FETCH_ALL", payload: [] };

  // return action
  dispatch(action);
};

// action cretors are action that return an action
// an action has just an type and payload

// ok jusque la tout va bien puis suis perdu
// with redux thunk since we dealing with async logique we had to add this ASYNC(DISPATCH) logique
// in font of it
// AND then instead of returning the action, we have to dispatch it
// sd
console.log("nerden len bu a^pi");
