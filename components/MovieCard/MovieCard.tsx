import CardMedia from '@material-ui/core/CardMedia';
import { getAverageRatings } from 'shared/utils';
import Tooltip from '@material-ui/core/Tooltip';

import {
  Genres,
  Description,
  Duration,
  Stats,
  ContentRating,
  Score,
  IMDBRating,
  Year,
} from 'shared/styledMovieInfo';
import FavoriteButtonConnector from 'components/FavoriteButton/FavoriteButtonConnector';
import Wrapper, { Content, Meta } from './MovieCardStyled';

interface Props {
  movieData: IMovie;
  isFavorite: boolean;
  handleClick: (id: string) => void;
}

const MovieCard = ({ movieData, isFavorite, handleClick }: Props) => {
  const {
    id,
    title,
    ratings,
    year,
    genres,
    posterurl,
    imdbRating,
    duration,
    contentRating,
    storyline,
  } = movieData;

  return (
    <Wrapper onClick={() => handleClick(id)}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={posterurl}
        title="Contemplative Reptile"
      />
      <Content>
        <h2>{title}</h2>
        <Stats>
          <div>
            <Score>
              <strong>{getAverageRatings(ratings)}</strong>
            </Score>
            {imdbRating && <IMDBRating>IMDB {imdbRating}</IMDBRating>}
          </div>
          <Meta>
            <Year>{year}</Year>
            <Duration>{duration}</Duration>
            {contentRating && (
              <Tooltip disableFocusListener title={'Content Rating'}>
                <ContentRating aria-label={'Content Rating'}>{contentRating}</ContentRating>
              </Tooltip>
            )}
          </Meta>
        </Stats>
        <Genres>{genres.join(', ')}</Genres>
        <Description>{storyline}</Description>
        <FavoriteButtonConnector id={id} isFavorite={isFavorite} />
      </Content>
    </Wrapper>
  );
};

export default MovieCard;
