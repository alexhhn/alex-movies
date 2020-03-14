import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { getAverageRatings } from 'shared/utils';

const MovieCard = ({
  title,
  ratings,
  year,
  genres,
  posterurl,
  imdbRating,
  duration,
  contentRating,
}: IMovie) => {
  return (
    <CardWrapper>
      {/* <CardActionArea> */}
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
            <strong>{getAverageRatings(ratings)}</strong>
            <pre>imdb: {imdbRating}</pre>
          </div>
          <div>
            <pre>{year}</pre>
            <pre>{duration}</pre>
            <pre>{contentRating}</pre>
          </div>
        </Stats>
        <p>{genres.join(' ,')}</p>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
        <p>Favorite icon</p>
      </Content>
      {/* </CardActionArea> */}
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: #fafafa;
    transition: all 0.25s ease-in;
    max-height: 300px;
    max-width: 350px;
    display: flex;
    margin: 0 16px 16px 0;
  }

  > .MuiCardMedia-root {
    height: 100%;
    min-width: 150px;
  }

  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled(CardContent)`
  padding: 0 12px 12px;
`;

export default MovieCard;
