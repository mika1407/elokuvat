import React from 'react';
// Components
import Thumb from '../Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) =>  (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt='movie-thumb'
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>JUONI</h3>
          <p>{movie.overview}</p>

          <div className='rating-directors'>
            <div> 
              <h3>ENSI-ILTA</h3>
              <div className='vvuosi'>{movie.release_date}</div>
            </div>
            <div>
              <h3>ARVOSANA</h3>
              <div className='score'>{movie.vote_average}</div>
            </div>
            <div className='director'>
              <h3>OHJAAJA{movie.directors.length > 1 ? 'T' : ''}</h3>
              {movie.directors.map(director => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );


export default MovieInfo;