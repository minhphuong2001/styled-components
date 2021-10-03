import styled from "styled-components";

export const Nav = styled.nav`
    background-color: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    position: relative;
`;

export const NavLink = styled.a`
    color: #fff;
    font-size: 34px;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: poiter;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px
    }
`

export const NavIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    p {
        font-size: 22px;
        margin-right: 10px;
    }
`