import { NextPage } from 'next';
import { fetchMovieById } from 'redux/ducks/movieDetailDuck/movieDetailUtils';
import { setMovieDetail } from 'redux/ducks/movieDetailDuck/movieDetailDuck';
import { getAverageRatings, getScaledImageUrl } from 'shared/utils';
import {
  Genres,
  Description,
  Duration,
  Stats,
  Actors,
  ContentRating,
  Score,
  IMDBRating,
  Year,
} from 'shared/styledMovieInfo';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteButton';
import { useRouter } from 'next/router';
import Wrapper, {
  Poster,
  Content,
  BackButton,
  TitleRow,
  ScoreView,
  PosterMobile,
} from './MovieDetailsStyled';

interface Props {
  movieDetailData: IMovie;
}

/**
 * @summary This page show details of a single movie.
 * @parameter movieDetailData: The movie data from redux
 */
const MovieDetails: NextPage<Props> = ({ movieDetailData }) => {
  if (!movieDetailData) {
    return <h1>404: Page not found</h1>;
  }

  const {
    id,
    title,
    storyline,
    posterurl,
    ratings,
    genres,
    imdbRating,
    actors,
    year,
    duration,
    contentRating,
  } = movieDetailData;

  const favorites = useSelector((state: RootState) => state.user.favorites);
  const isFavorite = favorites.includes(id) ? true : false;
  const router = useRouter();

  const scaledDekstopUrl = getScaledImageUrl(posterurl, 3);
  const scaledMobileUrl = getScaledImageUrl(posterurl, 2);
  return (
    <Wrapper>
      <Poster>
        <img src={scaledDekstopUrl} alt="poster" />
      </Poster>
      <PosterMobile>
        <img src={scaledMobileUrl} alt="poster" />
      </PosterMobile>
      <Content>
        <BackButton onClick={() => router.push('/movieoverview')}>
          <span aria-hidden="true" />
          Back to Home
        </BackButton>
        <TitleRow>
          <h1>{title}</h1>
          <ScoreView>
            <div>
              <Score large>
                <strong>{getAverageRatings(ratings)}</strong>
              </Score>
              {imdbRating && <IMDBRating large={true}>IMDB {imdbRating}</IMDBRating>}
            </div>
            <FavoriteButton id={id} isFavorite={isFavorite} large />
          </ScoreView>
        </TitleRow>
        <Stats large>
          <Year large>{year}</Year>
          <Duration large>{duration}</Duration>
          {contentRating && (
            <ContentRating large>
              <span>Content rating: </span>
              {contentRating}
            </ContentRating>
          )}
        </Stats>
        <Genres large>{genres.join(', ')}</Genres>
        <Actors large>
          <strong>Starred by: </strong>
          {actors.join(', ')}
        </Actors>
        <Description large>{storyline}</Description>
      </Content>
    </Wrapper>
  );
};

MovieDetails.getInitialProps = async ctx => {
  // * A Query can be a string or an array of strings.
  const movieIdFromQuery = typeof ctx.query.id == 'string' ? ctx.query.id : ctx.query.id[0];

  let movieDetailData;
  const movieState = ctx.store.getState().movies;
  // * We dont need to fetch data for a single movie if this page is redirected from movie overview (homepage), only when the page is loaded by a URL. This helps optimizing the pageload speed.
  if (movieState.data.length === 0) {
    const movieDataFromServer = await fetchMovieById(movieIdFromQuery);
    ctx.store.dispatch(setMovieDetail(movieDataFromServer));
    movieDetailData = ctx.store.getState().movieDetail.data;
  } else {
    movieDetailData = movieState.data.find((movie: IMovie) => movie.id === movieIdFromQuery);
  }
  return { movieDetailData };
};

export default MovieDetails;
