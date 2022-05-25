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