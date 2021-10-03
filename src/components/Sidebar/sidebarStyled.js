import styled from "styled-components";

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 100;
    width: 300px;
    height: 100%;
    background-color: #ffc500;
    color: #fff;
    display: grid;
    align-item: center;
    top: 0;
    right: ${({isOpen}) => (isOpen ? '0' : '-500px')};
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 400px) {
        width: 100%;
    }

`;
export const SidebarIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 28px;
    color: #000;
    cursor: pointer;
`;
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;
    margin-top: 150px;
    color: #000;
    font-weight: bold;


    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(3, 60px);
    }

`;
export const SidebarLink = styled.a`
    font-size: 24px;
    text-decoration: none;
    transition: 0.2s ease-in;
    cursor: pointer;

    &:hover {
        color: #e31837;
    }

`;
export const SidebarBtn = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    border: none;
    background-color: #e31837;
    transition: 0.2s ease-in;
    text-align: center;
`;
export const Sidebar = styled.div`

`;