import {createSlice} from "@reduxjs/toolkit";
import wishedArticlesSlice from "./wishedArticles.slice";
import wishedArticles from "./wishedArticles.slice";

export const articlesSlice=createSlice({

    name:"articles",
    
    initialState:[
        {name:"BIK045", image:"./bike-1.jpg" , price: 679},
  {name:"ZOO47", image:"./bike-2.jpg" , price: 799},
  {name:"LIK089", image:"./bike-3.jpg" , price: 839},
  {name:"GEW08", image:"./bike-4.jpg" , price: 1249},
  {name:"KIWIT", image:"./bike-5.jpg" , price: 899},
  {name:"NASAY", image:"./bike-6.jpg" , price: 1399}
    ],
        
      

    reducers:{
        addWishedArticleToDB:(state, action)=>{
            const selectWishedArticle=state.find((element)=>element.name===action.payload)
            

        }

    }



})
export const{addWishedArticleToDB} = articlesSlice.actions
export default articlesSlice.reducer;