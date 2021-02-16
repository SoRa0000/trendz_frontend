import styled from 'styled-components'

export const SecondaryPollWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    height: 250px;
    background: red;
`
export const SecondaryPollItem = styled.div`
    width: 25%;
    height: 100%;
    background: blue;
    color: #fff;
    @media screen and (max-width: 766px){
        width: 50%;
        height: 50%;
    }
`