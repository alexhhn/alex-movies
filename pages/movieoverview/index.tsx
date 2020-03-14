import { NextPage } from 'next';
import styled from 'styled-components';
import { fetchMovies } from '../../redux/ducks/movieDuck';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';

interface Props {
  custom: string;
}

const MovieOverview: NextPage<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <CardWrapper>
      <h1>Movie Overview</h1>
      <MovieCard />
      <p>
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
      </li>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: white;
`;

MovieOverview.getInitialProps = ctx => {
  return { custom: 'custom' };
};

export default MovieOverview;
