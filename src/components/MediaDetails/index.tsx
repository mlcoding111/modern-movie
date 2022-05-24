import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

// Interface to make props reliable on the test.tsx
import { MediaDetailsWrapper, MediaInfo } from './styles'
import { Col, Row, Grid } from '../../styles/global'

interface Props{
    rating?: number,
    title?: string,
    imgSrc?: string,
    overview?: string
}

export const MediaDetails:FC <Props> = () => {
  const { title, id } = useParams();

  return (
    <MediaDetailsWrapper>

      <Grid>
        {/* Row */}
        <Row>
          <h1>{title}</h1>
        </Row>

        {/* Row */}
        <Row>          
          <Col size={1}>
            <img src="https://picsum.photos/350/560" />
          </Col>
          
          <Col size={3}>
            <ul>
                <li>Time</li>
                <li>Rating</li>
                <li>Type</li>
            </ul>
            <p className='overview'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloremque, aspernatur, 
            officia animi a alias numquam odio, soluta eos exercitationem aliquam. Officiis commodi odio dolore labore earum id eaque soluta ad 
            rerum necessitatibus. Minus dolorum soluta impedit aperiam. Exercitationem itaque vel reprehenderit impedit voluptatem, minima, fugit 
            illo porro quae eveniet eius placeat perspiciatis ducimus ullam perferendis voluptatibus pariatur!</p>
            
          </Col>
        </Row>

        {/* Row */}
        <Row>
          <Col size={1}>
            <h2>Related</h2>     
            <h2>Details</h2>
          </Col>
        </Row>
        <Row>
          <p>Display recommended media here</p>
        </Row>

      </Grid>      
    </MediaDetailsWrapper>
  )
}
