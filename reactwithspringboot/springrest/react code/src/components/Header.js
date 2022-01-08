import React from 'react'
import { Card, CardBody } from 'reactstrap'

function Header() {
    return (
        <div>
        <Card color ='warning'>
          <CardBody>
          <h5  className='text-center my-3' >Wecome to Course Application</h5>
          </CardBody>
        </Card>
       </div>
    )
}

export default Header
