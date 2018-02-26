import axios from 'axios';
export const LOAD_CARDS = 'LOAD_CARDS'; 

export const loadCards = () => { 
  return dispatch => {
    axios.get('/api/kanban') //?
    .then(result => {
      console.log('SMOKE', result.data)
      return result.data
    })
    .then(data => {
      console.log('carrrrds', data)
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




// export const ADD_TODO = 'ADD_TODO';
// export const INCREMENT_NEXT_ID = 'INCREMENT_NEXT_ID';

// // This is the ACTION CREATOR
// export const addTodo = (todo) => {

//   const newTodo = {
//     item: todo,
//     completed: false
//   }
//   return { //an object
//     type: ADD_TODO, //always return a type, that leads to further handling of action
//     todo: newTodo
//   }
// }

// Action Creator returning function
// export const loadPlanets = () => {
//   //This is returning a THUNK - it returns a FUNCTION; can use getState()
//   return dispatch => { 
//     return fetch(`${SWAPI_STUB}/planets`) //THIS IS IMPORTANT! Instead of fetch(), can use load()
//       // promise
//       .then(response => {
//         return response.json();
//       })
//       .then(json => {
//         return json.results //justin says .results no need (if it works!)
//       })
//       .then(planets => {
//         //go get planets first, take one and set it to the first one
//         dispatch({ //dispatch is on store; sends an action object into reducer, which it knows about because it's tied to store; which is bound to createStore(reducer)
//           type: LOAD_PLANETS,
//           planets
//         });
//         //This returns the same thing as app.js in mapDispatchToProps = an object!
//         dispatch(setActivePlanet(planets[0])) //triggers actual action; then code updates
//       })
//       .catch(err => {
//         console.log(err);
//         return dispatch({
//           type: LOAD_PLANETS,
//           planets: []
//         });
//       });
//   }
// }