import styled from "styled-components";

type Props = {
    rating: number;
}

export const Selector = styled.div`
    display: block;
    width: 100%;
    max-width: 13em;
    margin: 0em auto;
    margin-top: 2em;
    height: 2.5em;
    font-size: 10pt;
    border-radius: 50px;
    background: var(--secondary-color);
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    box-shadow: inset rgba(0,0,0,.1) 0px .25em .5em;
    position: relative;

    input {
        display: none;
    }

    label {
        width: 50%;
        float: left;
        text-align: center;
        line-height: 2.5em;
        color: #fff;
        position: relative;
        z-index: 500;
        cursor: pointer;
        transition: all .2s ease-in-out;
    }

    input:checked + label {
        color: #fff;
        text-shadow: rgba(0,0,0,.1) 0px -1px 2px;
    }

    input:first-of-type:checked ~ .indicator {
        left: 0;
    }
    input:nth-of-type(2):checked ~ .indicator {
        left: 50%;
    }

`

export const Indicator = styled.div`
    display: block;
    width: 50%;
    height: 2.5em;
    background: #e08217;
    border: 1px solid #E8932F;
    border-radius: 50px;
    position: absolute;
    top: 0;
    z-index: 250;
    transition: left .2s ease-in-out;
`