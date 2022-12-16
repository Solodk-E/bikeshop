import React from 'react'

function basketLine(props) {
  


  
  var totalArticle=props.propPrice*props.propQuantity

    return (
    

    <tr>
        <td>{props.propName}</td>
        <td>{props.propPrice}</td>
        <td>{props.propQuantity}</td>
        <td>{totalArticle}</td>

    </tr>
  )
}

export default basketLine