import { LOAD_CARDS } from '../actions';

const initialState = {
  // cards: [],
  cards: [
  {
    _id : 1,
    title : 'Talion: The Revenant from DB',
    priority : 'Michael A. Stackpole',
    status: 'high',
    createdBy: 'whodat',
    assignedTo: 'blahblah'
  },
  {
    _id : 2,
    title : 'Ready Player One from DB',
    priority : 'Ernest Cline',
    status: 'high',
    createdBy: 'whodat',
    assignedTo: 'blahblah'
  },
  {
    _id : 3,
    title : 'Enders Game from DB',
    priority : 'Orson Scott Card',
    status: 'high',
    createdBy: 'whodat',
    assignedTo: 'blahblah'
  }
]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_CARDS':
      return {
        
        ...state, 
        card: action.cards
       }

    default:
      return state;
  }
}



// import { LOAD_PLANETS, SET_ACTIVE_PLANET } from '../actions';

// const initialState = {
//   planets: [],
//   activePlanet: {}
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD_PLANETS:
//       return { ...state, planets: action.planets } //spread state: planets key: action.planets is stored as new object
//     case SET_ACTIVE_PLANET:
//       return { ...state, activePlanet: { ...action.planet }} //object has memory address, attached to activePlanet
//     default:
//       return state;
//   }
// }