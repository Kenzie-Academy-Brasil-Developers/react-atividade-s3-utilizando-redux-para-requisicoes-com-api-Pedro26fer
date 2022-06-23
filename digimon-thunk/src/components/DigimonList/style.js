import styled from "styled-components";

export const Main = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 80vw;
    height: 85vh;

    background-color: #777;

    margin-left: 120px;


`

export const ListDigimons = styled.ul`

    width: 90%;
    height: 100%;

        
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;

    list-style: none;

    color: purple;
    font-family: monospace;
    font-size: 25px;  
    font-weight: 700;

`

export const CardDigimon = styled.div`

    width: 250px;
    height: 300px;


    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border-radius: 8px;
    border: 2px solid purple;

    background-color: white;

    img{
        width: 100px;
        height: 100px;
    }


`

