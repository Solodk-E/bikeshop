import React, {useState} from 'react';
import CatalogueCard from '../components/CatalogueCard';

function WishListScreen() {

  const [wishList, setWishList]=useState([])

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
    <div>WishListScreen</div>
  )
}

export default WishListScreen