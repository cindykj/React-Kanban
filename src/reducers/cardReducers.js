import { LOAD_CARDS, ADD_CARD } from '../actions';

const initialState = {
  cards: []

}

export default (state = initialState, action ) => {
  switch (action.type) {

    case 'LOAD_CARDS':
      return { 
        ...state, 
        cards: action.cards
       }

    case 'ADD_CARD':
    console.log('addcardstate', state)
       return {
         
         ...state,
         id: action.id,
         title: action.title,
         priority: action.priority,
         status: action.status,
         createdBy: action.createdBy,
         assignedTo: action.assignedTo
       }
       


    default:
      return state;
  }
}

