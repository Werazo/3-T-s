import styled from "styled-components";

const ContenedorBase = styled.section`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 99vw;
    height: 80vh;
    background-color: #f6ebc4;
    box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: center;
        height: 80%;
        align-items: center;
    }
`;

const ContenedorComida = styled.div`
    display: flex;
    position: relative;
    top: -55px;
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
    margin: 4%;
    box-sizing: border-box;
 
    @media(max-width: 60rem){ /* 950px */
        top: 0;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 40px;
        flex-direction: column;
    }
`;

const ImgComida = styled.img`
    display: flex;
    align-items: center;
    width: 30%;
    max-width: 500px;

    @media(max-width: 60rem){
        width: 60%
    }
`;

const Subtitulo = styled.h2`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    color: rgb(99, 70, 28);
    font-weight: 200;
    font-size: 200%;
`;
export {ContenedorBase, ImgComida, ContenedorComida, Subtitulo};