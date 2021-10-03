import React from 'react'
import { BannerContainer, BannerContent, BannerBtn } from './bannerStyled'

export default function bannerStyled() {
    return (
        <BannerContainer>
            <img src="" alt="" />
            <BannerContent>
                <h1>Pizza of the Day</h1>
                <p>Discover the right combination to curb your craving. Go on. Make it yours.</p>
                <BannerBtn>
                    Order
                </BannerBtn>
            </BannerContent>
        </BannerContainer>
    )
}