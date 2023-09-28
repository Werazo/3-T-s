import styled from "styled-components";

const ContenedorBase = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    background-color: #feebae;
    box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: space-around;
        height: 12vh;
        align-items: center;
    }
`;