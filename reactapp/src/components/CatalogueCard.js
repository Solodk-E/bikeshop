import React from 'react'

function CatalogueCard(props) {
  return (
    <div id="catalogueCard">
        <div id="ImageCardBox">
            <img id="cardImage" src={props.propImage}/>
        </div>
        <div id="cardName">
            {props.propName}
        </div>
   
        <div id="cardPrice">
            {props.propPrice}€
        </div>
        <div id="cardButtons">
            <button id="cardBuyButton">
                Wish
            </button>
            <button id="cardBuyButton">
                Buy
            </button>
        </div>
        

    </div>
  )
}

export default CatalogueCard