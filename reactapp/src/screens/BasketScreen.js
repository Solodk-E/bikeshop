import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import BasketLine from '../components/basketLine';

function BasketScreen() {

  const [totalCommande, setTotalCommande]=useState(0)

  const basket = useSelector(state=>state.basketArticles)

  useEffect(()=>{
    var count=0;
    basket.forEach(element => {
      count+=element.price*element.quantity
    });
    setTotalCommande(count)
 },[])

  var basketDisplay=basket.map(element=>{

 

    return(
     

      <BasketLine
        propName={element.name}
        propImage={element.image}
        propPrice={element.price}
        propQuantity={element.quantity}
      />
          

    )
   
  })





  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
          Basket
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom</td>
            <td>Prix unitaire</td>
            <td>Quantité</td>
            <td>Montant Modèle</td>
          </tr>
          <tr>
            {basketDisplay}
          </tr>
          <td></td>
        </tbody>
        <tfoot>
          <tr>
            <td>Montant total:</td>
            <td>{totalCommande} €</td>
          </tr>

        </tfoot>

      </table>
      
  
      
    </div>
  )
}

export default BasketScreen