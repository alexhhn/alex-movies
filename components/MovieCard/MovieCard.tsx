import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { getAverageRatings } from 'shared/utils';
import { Favorite } from '@styled-icons/material/Favorite';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';

const MovieCard = ({
  title,
  ratings,
  year,
  genres,
  posterurl,
  imdbRating,
  duration,
  contentRating,
  storyline,
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
        <div>
          <h2>{title}</h2>
          <Stats>
            <div>
              <Score>
                <strong>{getAverageRatings(ratings)}</strong>
              </Score>
              <pre>IMDB {imdbRating}</pre>
            </div>
            <Meta>
              <pre>{year}</pre>
              <Duration>{duration}</Duration>
              <ContentRating>{contentRating}</ContentRating>
            </Meta>
          </Stats>
          <Genres>{genres.join(', ')}</Genres>
          <Description>{storyline}</Description>
        </div>
        <StyledFavoriteBorder size={22} />
      </Content>
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: #fafafa;
    transition: all 0.25s ease-in;
    max-height: 400px;
    max-width: 350px;
    display: flex;
    margin: 0 16px 16px 0;
  }

  > .MuiCardMedia-root {
    height: 100%;
    max-width: 135px;
  }

  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const StyledFavoriteBorder = styled(FavoriteBorder)`
  align-self: flex-end;
  color: ${props => props.theme.favoriteColor};
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  pre {
    margin: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Meta = styled.div`
  align-items: flex-end;
`;

const Content = styled(CardContent)`
  &.MuiCardContent-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  padding: 0 12px 12px;
`;

const Description = styled.p`
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;

const Score = styled.div`
  width: 38px;
  height: 38px;
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  strong {
    margin: 0;
    font-size: 16px;
  }
`;

const Genres = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
`;

const ContentRating = styled.pre`
  text-decoration: underline;
`;

const Duration = styled.pre`
  font-style: italic;
`;

export default MovieCard;
