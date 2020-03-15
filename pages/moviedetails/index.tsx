import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  movieState: MovieState;
  query: ParsedUrlQuery;
}

const MovieDetails: NextPage<Props> = ({ movieState, query }) => {
  console.log('movieState', movieState);

  console.log('', query.id.length);

  if (query.id && query.id.length === 1) {
    const movieData = movieState.data.find(movie => movie.id == parseInt(query.id[0]));
    console.log('movieData', movieData);

    return (
      <>
        <h1>Movie Details</h1>
        <p>
          Movie details - in this view will display more detailed information about the movie such
          as plot, actos etc.
        </p>
      </>
    );
  }

  return <h1>404: Page not found</h1>;
};

MovieDetails.getInitialProps = async ctx => {
  const movieState = ctx.store.getState().movies;
  const query = ctx.query || '';
  return { movieState, query };
};

export default MovieDetails;
