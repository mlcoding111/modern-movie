import React, { FC } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MediaService from '../../services/MediaService'

type Props = {
    type: string,
    id: string
}

export const Related:FC <Props> = ({type, id}) => {

    const [data, setData] = React.useState()

    const getData = async () => {
        const data = await MediaService.getSimilar(type, id)
        console.log(data)
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
            {LIST.map((item, index) => (
                <img src={item} />
            ))}
            {/* {data ? (
              data.map((item, index) => (
                <Media src={item.poster_path} item={item} title={item.title} />
              ))
            ) : (
              LIST.map((item, index) => (
                <Media src={item} data={data} />
              ))
            )} */}
    
        </Carousel>
      );
}
