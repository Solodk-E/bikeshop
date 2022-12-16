import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import CatalogueCard from '../components/CatalogueCard';


var data=[
  {name:"BIK045", image:"./bike-1.jpg" , price: 679},
  {name:"ZOO47", image:"./bike-2.jpg" , price: 799},
  {name:"LIK089", image:"./bike-3.jpg" , price: 839},
  {name:"GEW08", image:"./bike-4.jpg" , price: 1249},
  {name:"KIWIT", image:"./bike-5.jpg" , price: 899},
  {name:"NASAY", image:"./bike-6.jpg" , price: 1399}
]

function CatalogueScreen(props) {

  // const [dataBikes, setDataBikes]=useState(data);

  const dataBikes = useSelector(state=>state.articles)

console.log(dataBikes)

  var displayBikeCards=dataBikes.map(element=>{
    return(
      <CatalogueCard
        propImage={element.image}
        propName={element.name}
        propPrice={element.price} 
      />

    )
  })


  return (
    <div className="cataloguescreen">
      <div className="sidecolumn">
      <div>Tri1</div>
        <div>Tri2</div>
        <div>Tri3</div>
        <div>Filtre1</div>
        <div>Filtre2</div>
        <div>Filtre3</div>
      </div>
      <div id="catalogueDisplay">{displayBikeCards}</div>
    </div>
  )
}

export default CatalogueScreen