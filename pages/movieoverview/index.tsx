import { NextPage } from 'next';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';
import MovieList from 'components/MovieList/MovieList';
import _union from 'lodash/union';
import _keyBy from 'lodash/keyBy';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, toggleCategory } from 'redux/ducks/movieDuck/movieDuck';
import { RootState } from 'redux/store';
import { movieHasCategory } from 'redux/ducks/movieDuck/movieUtils';
interface Props {
  custom: string;
  movieState: MovieState;
}

const MovieOverview: NextPage<Props> = ({ movieState }) => {
  // console.log('movies :', movieState.data[0]);
  // console.log('movies :', movieState.data[5]);

  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.movies.categories);
  const selectedCategories = useSelector((state: RootState) => state.movies.selectedCategories);

  // Mutate redux, client-side
  useEffect(() => {
    dispatch(getCategories(movieState.data));
  }, [movieState.data]);

  console.log('selectedCategories', selectedCategories);
  console.log('movieState.data', movieState.data);

  const filteredMovies =
    selectedCategories.length > 0
      ? movieState.data.filter(movie => movieHasCategory(movie, selectedCategories))
      : movieState.data;

  return (
    <Wrapper>
      <CategoryFilter
        categories={categories}
        onChipSelect={categoryId => dispatch(toggleCategory(categoryId))}
      />

      <MovieList movies={filteredMovies} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  max-width: 1280px;
  margin: auto;
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
