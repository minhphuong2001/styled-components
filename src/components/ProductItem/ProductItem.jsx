import React from 'react'
import {ProductItemContainer, ItemBtn, ProductInfo} from './productItemStyled'

export default function ProductItem({ product }) {
    
    return (
        <ProductItemContainer>
            <img src={product.image} alt="" />
            <ProductInfo>
                <h5>{product.name}</h5>
                <p>{product.desc}</p>
                <p>{product.price}</p>
            </ProductInfo>
            <ItemBtn>
                {product.button}
            </ItemBtn>
        </ProductItemContainer>
    )
}
