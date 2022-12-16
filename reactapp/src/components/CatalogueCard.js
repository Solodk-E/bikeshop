import React from 'react'
import { useDispatch } from 'react-redux'
import { addArticleToBasket } from '../features/basketArticles.slice';
import {addWishedArticle} from '../features/wishedArticles.slice'

function CatalogueCard(props) {

    const dispatch = useDispatch();

    const wisher= () =>{
        dispatch(addWishedArticle({name:props.propName, image:props.propImage, price:props.propPrice}))
    }

    const addToBasket=()=>{
        dispatch(addArticleToBasket({name:props.propName, image:props.propImage, price:props.propPrice}))


    }

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
            <button id="cardBuyButton" onClick={wisher}>
                Wish
            </button>
            <button id="cardBuyButton" onClick={addToBasket}>
                Buy
            </button>
        </div>
        

    </div>
  )
}

export default CatalogueCard