import { ADD_ORDER, DELETE_ORDER } from '../constants';

export const addOrder = text => {
  const action = {
    type: ADD_ORDER,
    text
  };
  //console.log('action in addReminder', action);
  return action;
};

export const deleteOrder = id => {
  const action = {
    type: DELETE_ORDER,
    id
  };
  //console.log('deleting in actions', action);
  return action;
};

export default addOrder;
