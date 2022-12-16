import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import CatalogueCard from '../components/CatalogueCard';

function WishListScreen() {

  // const [wishList, setWishList]=useState([
  //   {name:"ZOO47", image:"./bike-2.jpg" , price: 799}

  // ])

    const wishList =useSelector(state=>state.wishedArticles)
    

  var wishListDisplay=wishList.map(element =>{
    return(
      <CatalogueCard
      propImage={element.image}
      propName={element.name}
      propPrice={element.price} 
    />

    )

  })


  return (
    <div>WishListScreen
      {wishListDisplay}
    </div>

  )
}

export default WishListScreen