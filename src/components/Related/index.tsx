import React, { FC } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MediaService from '../../services/MediaService'

type Props = {
    type: string,
    id: string
}

export const Related:FC <Props> = ({type, id}) => {

    const [data, setData] = React.useState<any[]>([])

    const getData = async () => {
        const response = await MediaService.getSimilar(type, id)
        setData(response.data.results)
        console.log(response.data.results)
    }

    React.useEffect(()=>{
        getData()
    }, [])

    const LIST = [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ];
      
    const responsive = {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
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
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
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
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} key={index}/>
        ))}
    
        </Carousel>
      );
}
