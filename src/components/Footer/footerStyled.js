import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 15px 0;
`;
export const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const FooterSocial= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SocialIcon = styled.div`
    margin: 0 10px;
    font-size: 20px;
    transition: 0.2s ease-in;

    &:hover {
        color: #e31837;
    }
`;