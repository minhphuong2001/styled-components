
import styled from "styled-components";

export const BannerContainer = styled.div`
    background-image: url("https://images.squarespace-cdn.com/content/v1/52276a9ae4b07870ea7550de/1607110663276-W3C3772LJCGZ8CEBCH8Z/rewards-pizza.jpg?format=2500w");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
    position: relative;
`;

export const BannerContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;

    h1 {
        font-size: 44px;
        font-weight: bold;
    }

    p {
        font-size: 20px;
        margin: 10px 0;
    }
`;

export const BannerBtn = styled.button`
    background-color: #fdc500;
    border: none;
    padding: 10px 20px;
    color: #000;
    font-size: 15px;
    font-weight: bold;
`;