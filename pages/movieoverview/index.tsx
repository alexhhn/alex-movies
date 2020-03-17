import { NextPage } from 'next';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import CategoryFilter from 'components/CategoryFilter/CategoryFilter';
import MovieList from 'components/MovieList/MovieList';
import _union from 'lodash/union';
import _keyBy from 'lodash/keyBy';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  toggleCategory,
  setSortby,
  resetCategories,
} from 'redux/ducks/movieDuck/movieDuck';
import { RootState } from 'redux/store';
import { getSortedMovies } from 'redux/ducks/movieDuck/movieUtils';
import SortFilter from 'components/SortFilter/SortFilter';
import _orderBy from 'lodash/orderBy';
import Logo from 'public/images/logo-miles-red.svg';
import devices from 'shared/media';
import { setShowFavorite, removeShowFavorite, toggleTheme } from 'redux/ducks/userDuck/userDuck';
import { setMovies } from 'redux/ducks/movieDuck/movieDuck';
import { fetchMovies } from 'redux/ducks/movieDuck/movieUtils';
import _difference from 'lodash/difference';
import { typeScale } from 'shared/typography';
import { CameraMovie } from '@styled-icons/boxicons-solid/CameraMovie';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { Moon as MoonFilled } from '@styled-icons/boxicons-solid/Moon';

interface Props {
  movieState: MovieState;
}

/**
 * @summary The current Home-page. Redirected from `pages/index.tsx`
 * @parameter movieState: Movies data fetched server-side into redux state.
 */
const MovieOverview: NextPage<Props> = ({ movieState }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.movies.categories);
  const isDarkTheme = useSelector((state: RootState) => state.user.darkTheme);

  const selectedCategories = useSelector((state: RootState) => state.movies.selectedCategories);
  const sortByItem = useSelector((state: RootState) => state.movies.sortBy);
  const showFavorites = useSelector((state: RootState) => state.user.showFavorites);
  const favorites = useSelector((state: RootState) => state.user.favorites);

  //* Mutate redux, client-side
  useEffect(() => {
    dispatch(getCategories(movieState.data));
  }, [movieState.data]);

  let moviesToRendered = movieState.data;

  // Filter by categories
  if (selectedCategories.length > 0) {
    moviesToRendered = movieState.data.filter(
      movie => _difference(selectedCategories, movie.genres).length === 0,
    );
  }

  // Filter by sort
  if (sortByItem.length > 0) {
    moviesToRendered = getSortedMovies(moviesToRendered, sortByItem);
  }

  // Filter by favorite
  if (showFavorites) {
    moviesToRendered = moviesToRendered.filter(movie => favorites.includes(movie.id));
  }

  const onClearSelection = () => {
    dispatch(resetCategories());
    dispatch(removeShowFavorite());
  };

  return (
    <Wrapper>
      <TopBar>
        <LogoView>
          <img src={Logo} />
          <CameraMovie size={18} />
          <h1>REAL RATINGS</h1>
        </LogoView>
        {isDarkTheme ? (
          <MoonFilled size={30} onClick={() => dispatch(toggleTheme())} />
        ) : (
          <Moon size={30} onClick={() => dispatch(toggleTheme())} />
        )}
      </TopBar>
      <h1></h1>
      <FilterView>
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onChipSelect={categoryId => dispatch(toggleCategory(categoryId))}
          onFavoriteChipSelect={() => dispatch(setShowFavorite())}
          onClearSelection={onClearSelection}
        />
        <SortFilter onSortItemSelect={sortItemId => dispatch(setSortby(sortItemId))} />
      </FilterView>

      <MovieList movies={moviesToRendered} onClearSelection={onClearSelection} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 24px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  > svg {
    transform: rotate(270deg);
    cursor: pointer;
  }
`;

const LogoView = styled.div`
  display: flex;
  img {
    width: 30px;
    object-fit: contain;
  }

  svg {
    margin: 0 0 -1px 4px;
    color: ${props => props.theme.textColor};
  }

  align-items: flex-end;

  h1 {
    margin: 0 0 -2px 5px;
    font-size: ${typeScale.paragraph};
    font-weight: normal;
  }
`;

const FilterView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  @media ${devices.mobileOnly} {
    flex-direction: column;
  }
`;

MovieOverview.getInitialProps = async ctx => {
  //* Fetch Movies, server-side
  const moviesFromServer = await fetchMovies();
  ctx.store.dispatch(setMovies(moviesFromServer));
  const movieState = ctx.store.getState().movies;

  return { movieState };
};

export default MovieOverview;
