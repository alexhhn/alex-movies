import { NextPage } from 'next';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';
import MovieList from 'components/MovieList/MovieList';
import _union from 'lodash/union';
import _keyBy from 'lodash/keyBy';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/ducks/movieDuck';
import { RootState } from 'redux/store';

interface Props {
  custom: string;
  movieState: MovieState;
}

const MovieOverview: NextPage<Props> = ({ movieState }) => {
  // console.log('movies :', movieState.data[0]);
  // console.log('movies :', movieState.data[5]);

  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.movies.categories);

  // Mutate redux, client-side
  useEffect(() => {
    dispatch(getCategories(movieState.data));
  }, [movieState.data]);

  return (
    <Wrapper>
      <CategoryFilter categories={categories} />
      <MovieList movies={movieState.data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  max-width: 1280px;
  margin: auto;

  /* width: 400px; */
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
