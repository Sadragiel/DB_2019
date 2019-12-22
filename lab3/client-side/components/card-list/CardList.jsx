import React, {useEffect, useState} from 'react';

import './styles.css';

export default ({
    cardList,
    currentPlayerId,
    showAllCards,
    showMyCards,
    obtain,
    search,
}) => {
    useEffect(() => {showAllCards()}, []);
    const [isMyCardsShown, changeMode] = useState(false);
    return ( 
        <div>
            {
                currentPlayerId ?  
                <section>
                    <h4>Mode</h4>
                    <button 
                        onClick={() => changeMode(false) || showAllCards() }
                    >Show All Cards</button>
                    <button onClick={() => changeMode(true) || showMyCards() } >Show My Cards </button>
                </section>
                : null
            }
           
           <ul className="card-list"> 
            { cardList ? cardList.map(card => ( 
                <li className={`card-list__item`} 
                    key={card.id}> 
                   <section>
                       <p> title {card.title}</p>
                        <p>description: {card.description}</p>
                        <p>manacost :{card.manacost}</p>
                        <p>atk :{card.atk}</p>
                        <p>def :{card.def}</p>
                   </section>
                   {    !isMyCardsShown 
                   ? <button onClick={(e) => e.preventDefault() || obtain(card.id)}>Obtain</button>
                    : null
                   }
                </li> 
            ))
                : <p>THERE ARE NO CARDS!</p>
            } 
        </ul> 

        </div>

        
    ) 
} 

