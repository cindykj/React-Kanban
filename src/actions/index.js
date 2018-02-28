import axios from 'axios';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';


export const loadCards = () => {
  return dispatch => {
    axios.get(`/api/kanban`) 
      .then(result => {
        // console.log('SMOKE', result.data)
        return result.data
      })
      .then(data => {
        // console.log('carrrrds', data)
        dispatch({
          type: LOAD_CARDS, //type
          cards: data //payload
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const addCard = card => {
  // console.log('caaahds', card)
  return (dispatch) => {
    return axios.post(`/api/kanban`, card)
      .then(result => {
        dispatch(loadCards()); //thunk allows for function to be returned 
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const deleteCard = id => {
  return (dispatch) => {
    axios.delete(`/api/kanban/:id`, id)
      .then(data => {
        dispatch(loadCards());
        // dispatch({
        //   type: LOAD_CARDS, //type
        //   cards: data //payload
        // })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const editCard = id => {
  return (dispatch) => {
    axios.put(`/api/kanban/:id`, id)
      .then(result => {
        dispatch(editCard())
      })
      .catch(err => {
        console.log(err)
      })
  }
}