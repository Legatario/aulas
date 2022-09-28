import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg)
    }
`

export const Heading1 = styled.h1 `
    font-size: 1.5rem;
    color: #000;

    span{
        display: block;
        font-size: 80%;
        color: #1976d2;
    }
`

export const Loader = styled.div`
    height: 50px;
    width: 50px;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    border-top:  4px solid #99e;
    border-right: 4px solid transparent;
    border-radius: 50%;
    animation: 1s ${spin} infinite;
`

export const Just = styled.div `
    margin: 30px 0;
    display: flex;
    align-content: center;
    justify-content: center;
`