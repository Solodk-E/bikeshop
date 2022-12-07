import React from 'react'
import {Link, Outlet} from 'react-router-dom'
 
function AccountScreen() {
  return (
    <div>
    <div>
      <button>
        <Link to='/cataloguescreen/selectionsubscreen'>
          Selection
        </Link>

      </button>

    </div>
    <Outlet/>
    </div>
  )
}

export default AccountScreen