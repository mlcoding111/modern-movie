import React, { FC } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styled from 'styled-components'

import MediaService from '../../services/MediaService'

import { useNavigate } from 'react-router-dom'

type Props = {
    type: string,
    id: string,
    changeData: (type: string, id: string) => void
}

export const Related:FC <Props> = ({type, id, changeData}) => {
    const navigate = useNavigate();

    const [data, setData] = React.useState<any[]>([])

    const getData = async () => {
        const response = await MediaService.getSimilar(type, id)
        setData(response.data.results)
        console.log(response.data.results)
    }

    React.useEffect(()=>{
        getData()
    }, [])

    const handleClick = (ids: string, title: string) => {
      console.log(ids, title)      
      navigate(`/media/${type}/${title}/${ids}`, {replace: true, state: {id: id, title: title}})
    }
      
    const responsive = {
        desktop: {
          breakpoint: {
            max: 1920,
            min: 1080,
          },
          items: 8,
          partialVisibilityGutter: 10,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      };
    
      return (
        <Wrapper>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}      
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
            
        {data && data.map((item : any, index : any) => (
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                 key={index}
                 onClick={() => handleClick(item.id, item.title)}
                 />
        ))}
    
        </Carousel>
        </Wrapper>
      );
     
}

export const Wrapper = styled.div`

  width: 100%;
  img{
    width: 100%;
    transition: 0.1s ease-in-out;
    opacity: 0.9;
  }

  img:hover{
    transform: scale(1.03);
    opacity: 1;
    cursor: pointer;
    overflow: visible;
    z-index: 999;
  }
`