import React from 'react'; 
import Card from './Card';
// import cardReducers from '../reducers/cardReducers';
// import Card from './Card';

const Column = ({cards, columnName}) => {
  // console.log('columnprops', columnName)
  return (
    // <div className="column-container"> 
      <div className="column-wrapper">
        <div className={columnName}> 
        <h1>
        {columnName.toUpperCase()}
        </h1>

        {
          cards 
          .filter((card) => {
            return (card.status === columnName)
          })
          .map((card) => {
            return (
              <Card 
              key={card.id} 
              title={card.title} 
              priority={card.priority} 
              created_by={card.created_by} 
              assigned_to={card.assigned_to}
              />
            )
          })
        }
      </div>
      </div>
      // </div>
  )
}
  
export default Column;
