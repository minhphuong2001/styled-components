import styled from "styled-components";
import bgc from '../../assets/image/bgc.jpg'

export const HeroContainer = styled.div`
    background-image: url(${bgc});
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

export const HeroContent = styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translateY(-50%);

`;

export const HeroItem = styled.div`
    
`;

export const HeroH1 = styled.h1`
    font-size: 60px;
    font-weight: bold;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`;


export const HeroP= styled.p`
    margin: 20px 0;
    font-size: 24px;
    font-weight: 600;
`;

export const HeroBtn = styled.div`
    width: 200px;
    font-size: 20px;
    padding: 10px 14px;
    border: none;
    background-color: #e31837;
    transition: 0.2s ease-in;
    text-align: center;

    &:hover {
        background-color: #ffd32a;
        color: #fff;
    }
`;