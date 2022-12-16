import { createSlice } from "@reduxjs/toolkit";

export const basketArticlesSlice=createSlice({

    name:"basketArticles",

    initialState:[

    ],

    reducers:{
        addArticleToBasket:(state, action)=>{

            var double = state.find(element=>element.name===action.payload.name)

            if( double==undefined){

            const newArticle={
                name:action.payload.name,
                image:action.payload.image,
                price:action.payload.price,
                quantity:1
            }
            state.push(newArticle)
        } else{
            double.quantity++
        }

            
        }



    }




})

export const {addArticleToBasket}=basketArticlesSlice.actions;
export default basketArticlesSlice.reducer  