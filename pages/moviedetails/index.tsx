import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { fetchMovieById } from 'redux/ducks/movieDetailDuck/movieDetailUtils';
import { setMovieDetail } from 'redux/ducks/movieDetailDuck/movieDetailDuck';

interface Props {
  movieDetailState: MovieDetailState;
}

const MovieDetails: NextPage<Props> = ({ movieDetailState }) => {
  console.log('movieDetailState', movieDetailState);

  const data = movieDetailState.data;
  if (!data) {
    return <h1>404: Page not found</h1>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.storyline}</p>
      <img src={data.posterurl} alt="poster" />
    </>
  );
};

MovieDetails.getInitialProps = async ctx => {
  // * A Query can be a string or an array of strings.
  const movieIdFromQuery = typeof ctx.query.id == 'string' ? ctx.query.id : ctx.query.id[0];

  let movieDetailState;
  const movieState = ctx.store.getState().movies;
  // * We dont need to fetch data for a single movie if this page is redirected from movie overview (homepage), only when the page is loaded by a URL. This helps optimizing the pageload speed.
  if (movieState.data.length === 0) {
    const movieDataFromServer = await fetchMovieById(movieIdFromQuery);
    ctx.store.dispatch(setMovieDetail(movieDataFromServer));
    movieDetailState = ctx.store.getState().movieDetail;
  } else {
    movieDetailState = movieState.data[movieIdFromQuery];
  }
  return { movieDetailState };
};

export default MovieDetails;
