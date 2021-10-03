import React from 'react'
import { SidebarContainer, SidebarIcon, SidebarMenu, SidebarLink, SidebarBtn } from './sidebarStyled'
import {RiCloseFill} from 'react-icons/ri'

export default function Sidebar({isOpen, toggle}) {

    return (
        <div className="sidebar">
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <SidebarIcon onClick={toggle}>
                    <RiCloseFill/>
                </SidebarIcon>
                <SidebarMenu>
                    <SidebarLink>Pizzas</SidebarLink>
                    <SidebarLink>Desserts</SidebarLink>
                    <SidebarLink>Full Menu</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    Order now
                </SidebarBtn>
            </SidebarContainer>
        </div>
    )
}
