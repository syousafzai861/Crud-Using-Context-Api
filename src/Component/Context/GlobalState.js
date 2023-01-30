import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialstate = {  //all the records are saving in this array 
  users: [
  ]
};
// now intializing the GLobal context
export const GlobalContext = createContext(initialstate);

// now by making the provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
//    Actions defined
 const removeUser = (id) =>{
    dispatch({
        type: 'REMOVE_USER',
        payload: id
    })
 }

 const addUser = (user) =>{
    dispatch({
        type: 'ADD_USER',
        payload: user
    })
 }

 const updateuser = (user)=>{
  dispatch({
    type:'UPDATE_USER',
    payload: user
  })
 } 
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        updateuser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
