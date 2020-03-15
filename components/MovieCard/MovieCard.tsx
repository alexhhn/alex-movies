import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { getAverageRatings } from 'shared/utils';
import { Favorite } from '@styled-icons/material/Favorite';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { useRouter } from 'next/router';
import devices from 'shared/media';

const MovieCard = ({
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
}: IMovie) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/moviedetails?id=${id}`);
  };

  return (
    //! This should be passed as a props, since this is a dumb component
    <CardWrapper onClick={handleClick}>
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
        <FavoriteBorder size={22} />
      </Content>
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: #fafafa;
    transition: all 0.25s ease-in;
    display: flex;
    height: 100%;
  }

  > .MuiCardMedia-root {
    height: initial;
    width: 40%;
  }

  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0 24px;

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
    height: 100%;
  }
  padding: 0 12px 12px;

  svg {
    display: flex;
    align-self: flex-end;
    color: ${props => props.theme.favoriteColor};
    min-width: 22px;
    min-height: 22px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  max-height: 100px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  @media ${devices.mobileOnly} {
    display: none;
  }
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
