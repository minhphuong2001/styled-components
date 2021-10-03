import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import {FooterContainer, FooterWrapper, FooterSocial, SocialIcon} from './footerStyled'

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <h1>Pizza</h1>
                <FooterSocial>
                    <SocialIcon>
                        <FaFacebookSquare/>
                    </SocialIcon>
                    <SocialIcon>
                        <AiFillInstagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <AiFillTwitterCircle/>
                    </SocialIcon>
                    <SocialIcon>
                        <AiFillYoutube/>
                    </SocialIcon>
                </FooterSocial>
            </FooterWrapper>
        </FooterContainer>
    )
}
