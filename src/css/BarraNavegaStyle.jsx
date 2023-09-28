import styled from "styled-components";

const Barra = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: #faf7ee;
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
        width: 15vw;
        font-weight: 500;
        font-family: inherit;
        border-color: transparent;
        background-color: transparent;
        cursor: pointer;

        &:hover{
            background-color: white;
            color: #8f6e03;
            border-bottom-color: #6e5504;
        }
    `;

    const ContenedorBotonBarra = styled.div`
        display: flex;
        border-radius: 8px;
        height: 10vh;
        width: 100%;
        font-weight: 500;
        font-family: inherit;
        justify-content: space-around;
        align-items: center;
    `;

    const ContenedorTitulo = styled.div`
        display: flex;
        border-radius: 8px;
        height: 10vh;
        width: 100%;
        font-weight: 500;
        font-family: inherit;
        justify-content: right;
        align-items: center;
    `;

    const Titulo = styled.h1`
        display: flex;
        margin-right: 5vw;
        color: brown;
    `;

export {Barra, BotonBarra, ContenedorTitulo, ContenedorBotonBarra, Titulo};