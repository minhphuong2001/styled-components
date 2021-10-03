import React from 'react'
import { Nav, NavIcon, NavLink } from './navbarStyled'
import {FaPizzaSlice} from 'react-icons/fa'

export default function Navbar({toggle}) {
    return (
        <div className="navbar">
            <Nav>
                <NavLink>Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <FaPizzaSlice />
                </NavIcon>
            </Nav>
        </div>
    )
}
