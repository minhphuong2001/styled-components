import styled from "styled-components"

export const ProductItemContainer = styled.div`
    width: 300px;
    margin: 15px;
    box-sizing: border-box;

    img {
        height: 200px;
        min-width: 200px;
        max-width: 100%;
        box-shadow: 8px 8px #fdc500;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;

    h5 {
        font-size: 20px;
        margin: 10px 0;
    }

    p:first-child {

    }

    p:last-child {
        font-weight: 600;
        margin: 10px 0;
    }
`;

export const ItemBtn = styled.button`
    background-color: #e31837;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 16px;
    border: none;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #fdc500;
        color: #000;
    }

`;

