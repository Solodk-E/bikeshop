import React from 'react'
import {Link, Outlet} from 'react-router-dom'
 
function AccountScreen() {
  return (
    <div className="cataloguescreen">
      <div className="sidecolumn">
        <div>
          <Link to='/accountscreen/identitysubscreen'>
            Identity
          </Link>
        </div>
        <div>
          <Link to='buyingorderssubscreen'>
            BuyingOrders
          </Link>
        </div>
      </div>
    <Outlet/>
    </div>
  )
}

export default AccountScreen