import styled from "styled-components";

type Props = {
    rating: number;
}

export const MediaDetailsWrapper = styled.div`
    min-height: 100vh;
    color: white;
    background: linear-gradient(to bottom, rgba(0,0,0, .3), rgba(0,0 ,0, 0));
    width: 100%;
    h1{
        margin: 1em auto;
    }

    img{
        width: 100%;
        border-radius: 15px;
        box-shadow: 0px 0px 8px black;
    }

    #related-list h2{
        margin: 2em auto;
        font-size: 1.8em;
        font-weight: 400 !important;
    }

    #related-list h2::after{
        content: "";
        display: block;
        height: 2px;
        width: 50px;
        background: white;
        position: relative;
        margin: 0 auto;
    }

    #poster-img{
        box-shadow: 2px 0px 15px black;
    }

    ul{
        list-style: none;
        display: flex;
        padding: .4rem;
    }

    h2{
        margin: 1em 0
    }

    li{
        margin: 0 .5rem;
    }

    .overview{
        padding: 1rem;
    }
`
export const MediaInfo = styled.div`

`