import { NextPage } from 'next';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';
import MovieList from 'components/MovieList/MovieList';
import _union from 'lodash/union';
import _keyBy from 'lodash/keyBy';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, toggleCategory, setSortby } from 'redux/ducks/movieDuck/movieDuck';
import { RootState } from 'redux/store';
import { movieHasCategory, getSortedMovies } from 'redux/ducks/movieDuck/movieUtils';
import SortFilter from 'components/SortFilter/SortFilter';
import _orderBy from 'lodash/orderBy';
import Logo from 'public/images/logo.png';

interface Props {
  custom: string;
  movieState: MovieState;
}

const MovieOverview: NextPage<Props> = ({ movieState }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.movies.categories);
  const selectedCategories = useSelector((state: RootState) => state.movies.selectedCategories);
  const sortByItem = useSelector((state: RootState) => state.movies.sortBy);

  // Mutate redux, client-side
  useEffect(() => {
    dispatch(getCategories(movieState.data));
  }, [movieState.data]);

  const filteredMovies =
    selectedCategories.length > 0
      ? movieState.data.filter(movie => movieHasCategory(movie, selectedCategories))
      : movieState.data;

  const sortedMovies =
    sortByItem.length > 0 ? getSortedMovies(filteredMovies, sortByItem) : filteredMovies;

  return (
    <Wrapper>
      <LogoView>
        <img src={Logo} />
        <p>REAL RATINGS</p>
      </LogoView>
      {/* <FilterView>
        <CategoryFilter
          categories={categories}
          onChipSelect={categoryId => dispatch(toggleCategory(categoryId))}
        />
        <SortFilter onSortItemSelect={sortItemId => dispatch(setSortby(sortItemId))} />
      </FilterView> */}
      <MovieList movies={sortedMovies} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  max-width: 1280px;
  margin: auto;
`;

const LogoView = styled.div`
  display: flex;
  img {
    width: 80px;
    object-fit: contain;
  }
  align-items: flex-end;

  p {
    margin: 0 0 -2px 5px;
    font-size: 16px;
  }
`;

const FilterView = styled.div`
  display: flex;
  justify-content: space-between;
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
