import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import {ProductContainer, ProductHeading, ProductWrapper} from './productStyled'
import { productData } from './productData'
import './productStyled'

export default function Product({heading}) {
    return (
        <div className="product">
            <ProductContainer>
                <ProductHeading>{heading}</ProductHeading>
                <ProductWrapper>
                    {
                        productData.map((item, index) => {
                            return (
                                <ProductItem product={item} key={index}/>
                            )
                        })
                    }
                </ProductWrapper>
            </ProductContainer>
        </div>
    )
}
