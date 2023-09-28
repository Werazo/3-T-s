import styled from "styled-components";

const Barra = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: #f6f1e0;
    box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: space-around;
        height: 12vh;
        align-items: center;
    }
`;

    const BotonBarra = styled.button`
        position: relative;
        border-radius: 8px;
        height: 10vh;
        width: 20vh;
        font-weight: 500;
        font-family: inherit;
        border-color: transparent;
        background-color: #f6f1e0;
        cursor: pointer;

        &:hover{
            color: #8f6e03;
            border-bottom-color: #bc9000;
        }
    `;

export {Barra, BotonBarra};