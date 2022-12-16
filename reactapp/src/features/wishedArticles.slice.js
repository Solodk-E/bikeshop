import { createSlice } from "@reduxjs/toolkit";

export const wishedArticlesSlice=createSlice({

    name:"wishedArticles",

    initialState:[
        
    ],
     
    reducers:{
        addWishedArticle:(state,action)=>{

            const double=state.find(element=>element.name===action.payload.name)

            if (double==undefined){
            const newArticle={
                name:action.payload.name,
                image:action.payload.image,
                price:action.payload.price    

            }
        state.push(newArticle)

        }

        }


        
        
    }

     
    


})

export const{addWishedArticle} = wishedArticlesSlice.actions
export default wishedArticlesSlice.reducer;