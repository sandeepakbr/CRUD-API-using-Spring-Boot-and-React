import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Offcanvas, Button} from 'bootstrap'
import { Link } from 'react-router-dom'

const  Menus = () => {
    return (
            <ListGroup className='mt-1'>
            <Link className='list-group-item list-group-item-action' tag="a" to="/">
                Home
            </Link>
            <Link  className='list-group-item list-group-item-action' tag="a" to="/add-course" action>
                Add Courses
            </Link>
            <Link  className='list-group-item list-group-item-action' tag="a" to="/view-courses" action>
                View Courses
            </Link>
            <Link  className='list-group-item list-group-item-action' tag="a" to="#!" action>
                About Us
            </Link>
            <Link  className='list-group-item list-group-item-action' tag="a" to="#!" action>
                Contact Us
            </Link>
            </ListGroup>

    )
}

export default Menus
