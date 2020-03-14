import { NextPage } from 'next';
import styled from 'styled-components';
import React from 'react';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';

interface Props {
  custom: string;
  movieState: MovieState;
}

const MovieOverview: NextPage<Props> = ({ movieState }) => {
  console.log('movies :', movieState);
  return (
    <Wrapper>
      <h1>Movie Overview</h1>
      <CategoryFilter />
      {/* <MovieList movies={movies.data} /> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: white;
  width: 400px;
`;

MovieOverview.getInitialProps = ctx => {
  // Get movies reducer - serverside
  const movieState = ctx.store.getState().movies;

  return { movieState, custom: 'custom' };
};

export default MovieOverview;

/* <p>
{' '}
In this view you will display the movie title, poster image, year and rating Listing of
movie overview elements
</p>
<li>
A user should be able to sort this list based on the data displayed in the overview element.
</li>
<li>
A user should be able to favorite a movie and filter the list so that only favorites are
displayed
</li> */
