import styled from "styled-components";

type Props = {
    rating: number;
}

export const MediaDetailsWrapper = styled.div`

    color: white;

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

    li{
        margin: 0 .5rem;
    }

    .overview{
        padding: 1rem;
        margin-top: 2rem;
    }
`
export const MediaInfo = styled.div`

`