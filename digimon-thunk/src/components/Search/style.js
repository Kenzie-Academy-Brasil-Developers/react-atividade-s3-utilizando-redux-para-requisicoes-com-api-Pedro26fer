import styled from "styled-components";



export const HeaderSearch = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    

    height: 15vh;
    max-width: 100vw;
    

    background-color: #0f0f0f;

    h2{
        font-family: monospace;
        font-size: 30px;
        color: #fa6000;;
    }

    input{
        padding: 8px;
        border-radius: 4px;
        border: none;

        width: 15vw;
    }

    button{
        cursor: pointer;

        padding: 8px;

        font-family: monospace;
        font-weight: 600;
        color: white;

        border: none;
        border-radius: 4px;

        background-color: #fa6000;

        :hover{
           background: #ff7f40;
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 10px;
    }

    span{
        color: #ff0000;
        font-weight: 700;
    }


`
