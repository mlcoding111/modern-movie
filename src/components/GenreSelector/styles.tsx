import styled from "styled-components";

type Props = {
    rating: number;
}

export const Selector = styled.nav`
    max-width: 1150px;
    margin: 0 auto;
   ul{
       display: flex;
       justify-content: center;
       list-style: none;
       flex-wrap: wrap;
       margin: 1em 0;
   }
   li{
       margin: 0 .5em;
   }
`

export const Button = styled.button`
    display: block;
    padding: .5em 1.5em;
    margin-top: 1em;
    /* background: #e08217;
    border: 1px solid #E8932F; */
    border: none;
    border-radius: 15px;
    font-weight: bold;
    color: #fff;
    background: var(--secondary-color);
    transition: left .2s ease-in-out;
    
    :hover{
        background: #e08217;
        cursor: pointer;
    }

`