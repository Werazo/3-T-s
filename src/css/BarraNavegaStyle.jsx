import styled from "styled-components";

const Barra = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: #faf7ee;
    box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 120%;
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        width: 50vw;
        height: 100%;
        background:  #faf7ee;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
        transition: transform .3s ease-in-out;
        transform: translate(100%);
    }
`;

    const BotonBarra = styled.button`
        position: relative;
        border-radius: 8px;
        height: 10vh;
        width: 15vw;
        font-weight: 500;
        border-color: transparent;
        background-color: transparent;
        cursor: pointer;
        align-items: center;

        &:hover{
            background-color: white;
            color: #8f6e03;
            border-bottom-color: #6e5504;
        }

        @media(max-width: 60rem){ /* 950px */
            height: 100%;
            width: 50vw;
            align-items: center;
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

        @media(max-width: 60rem){ /* 950px */
            height: 100%;
            width: 50vw;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
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

        @media(max-width: 60rem){ /* 950px */
            height: 20%;
            width: 50vw;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
    `;

    const Titulo = styled.h1`
        display: flex;
        margin-right: 5vw;
        color: brown;

        @media(max-width: 60rem){ /* 950px */
            font-size: medium;
            height: 20%;
            width: 50vw;
            margin-right: 0;
            flex-direction: column;
            align-items: center;
        }
    `;

export {Barra, BotonBarra, ContenedorTitulo, ContenedorBotonBarra, Titulo};