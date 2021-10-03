import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './heroStyled'
import { HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, HeroBtn } from './heroStyled'

export default function Hero() {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="hero-banner">
            <HeroContainer>
                <Navbar toggle={handleOpen}/>
                <Sidebar isOpen={isOpen} toggle={handleOpen}/>
                <HeroContent>
                    <HeroItem>
                        <HeroH1>Greatest Pizza Ever</HeroH1>
                        <HeroP>Ready to 60 seconds</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItem>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}
