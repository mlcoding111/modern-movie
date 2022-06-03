import styled from "styled-components";

type Props = {
    rating: number;
}

export const MovieCard = styled.div`
    width: 100%;
    /* margin: 1rem; */
    border-radius: 3px;
    box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary-color);
    position: relative;
    overflow: hidden;

    img{
        width: 100%;
    }

    img:hover{
        cursor: pointer;
    }

    .movie-info{
        color: #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem 1rem;
        letter-spacing: 0.5px;
    }

    h3{
        margin-top: 0;
        font-weight: 700;
    }

    span{
        background-color: var(--primary-color);
        padding: .25rem 0.5rem;
        border-radius: 5px;
        font-weight: bold;
    }

    span.green{
        color: lightgreen;
    }

    span.red{
        color: red;
    }

    span.orange{
        color: orange;
    }

    .overview{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        padding: 1rem;
        max-height: 100%;
        transform: translateY(101%);
        transition: transform 0.2s ease-in-out;
        font-family: 'Poppins';
    }

    :hover .overview{
    transform: translateY(0%);
    }

`