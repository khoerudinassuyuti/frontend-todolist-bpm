import { combineReducers } from 'redux';

const initialTodos = [];

function todos(state = initialTodos, action){
  switch(action.type){
    default: return state;
  }
}

export default combineReducers({ todos });
