import React from "react"
import RestaurentCard from "./RestaurentCard"
import {cards} from '../utils/mockData'
import { useState } from "react"




const Body = () => {
    
        let [resCards,setResCards]=useState(cards);

    
    
    
    return (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={()=>{let Cards=resCards.filter((res)=>res.averageRating>4);
             console.log("cards",cards)
             setResCards(Cards);

            }}>Top rated restaurents</button>
            </div>

        
            <div className="res-container">
                {
                    resCards
                            .map((obj)=>
                        (
                    <RestaurentCard key={obj.name} resData={obj}/>
                        )
                    )
                }


                
          
                
            </div>

        </div>
    )
}


export default Body