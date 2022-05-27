import styled from "styled-components";

type props = {
    backdrop_path: string;
}

export const MediaDetailsWrapper = styled.div`
    min-height: 100vh;
    color: white;
    background: linear-gradient(to bottom, rgba(0,0,0, .3), rgba(0,0 ,0, 0));
    width: 100%;

    @media all and (min-width: 950px) {
        .media-details {
            margin-left: 1em;
        }
    }

    @media all and (max-width: 950px){
        .row{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0 auto;
        }
        img{
            width: 250px !important;
        }

        ul{
            margin: 0 auto;
        }

    }

    .title-wrapper{
        display: flex;
        flex-direction: column;
        margin-left: .5em;
    }

    .media-details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .wrap{
        background-position: center;
        background-size: cover; 
        padding: 8em 0;
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
        margin: 0 .3rem;
    }

    .overview{
        position: relative;
        vertical-align: middle;
        padding: 1rem;
    }

    #tagline{
        font-weight: 400;
        font-size: 1.4em;
        margin: 1em 0;
        opacity: .8;
    }

    .genres-list{
        margin-top: auto;
    }

    .genres-list li:not(:last-child):after{
        content: ",";
    }
`
export const MediaInfo = styled.div`

`