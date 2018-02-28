import axios from 'axios';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DEL_CARD = 'ADD_CARD';


export const loadCards = () => {
  return dispatch => {
    axios.get('/api/kanban') //?
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
  console.log('caaahds', card)
  return (dispatch) => {
    return axios.post('/api/kanban', card)
      .then(result => {
        console.log(result)
        dispatch(loadCards()); //thunk allows for function to be returned 
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const deleteCard = id => {
  return (dispatch) => {
    axios.delete(`/api/kanban`)
      .then(result => {
        dispatch({
          type: LOAD_CARDS,
          cards: result.data
        });
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const editCard = id => {
  return (dispatch) => {
    axios.put('/api/kanban')
      .then(result => {
        dispatch({
          type: LOAD_CARDS,
          cards: result.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}