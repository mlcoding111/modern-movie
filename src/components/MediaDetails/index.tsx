import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

// Interface to make props reliable on the test.tsx
import { MediaDetailsWrapper, MediaInfo } from './styles'
import { Col, Row, Grid } from '../../styles/global'
import { IMG_URL } from '../../utils/variables'
import {Related} from '../Related'
import MediaService from '../../services/MediaService';


export const MediaDetails:FC = () => {
  const { title, id, type } = useParams();
  const [data, setData] = React.useState<any>({})

  const getData = async () => {
    const response = await MediaService.getById(type!, id!)
    setData(response.data)
  }

  const timeConvertor = (time: string) => {
    let value = parseInt(time)
    let hours = Math.floor(value / 60);
    let minutes = value % 60;
    return `${hours}h ${minutes} min`
  }

  React.useEffect(()=> {
    getData()
  }, [])

  return (
    <MediaDetailsWrapper>
      <button onClick={()=> console.log(data)}>Click me</button>
      <Grid>
        {/* Row */}
        <Row>
          <h1>{data.original_title || data.name}</h1>
        </Row>

        {/* Row */}
        <Row>          
          <Col size={1.3}>
            <img src={IMG_URL + data.poster_path} id="poster-img"/>
          </Col>
          
          <Col size={3}>
            <ul>
                <li>{type == "movie" ? timeConvertor(data.runtime) : (data.number_of_episodes + " episodes")}</li>
                <li>{data.vote_average}</li>
                <li>{type?.toLocaleUpperCase()}</li>
            </ul>
            <p className='overview'>{data.overview}</p>
            
          </Col>
        </Row>

        {/* Row */}
        <Row id="related-list">
            <h2>Related</h2>     
        </Row>

        <Row>
          <Related id={id!} type={type!}/>
        </Row>

      </Grid>      
    </MediaDetailsWrapper>
  )
}
