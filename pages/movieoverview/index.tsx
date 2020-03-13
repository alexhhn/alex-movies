import { NextPage } from 'next';
import styled from 'styled-components';
import { fetchMovies } from '../../redux/ducks/movieDuck';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

interface Props {
  custom: string;
}

const MovieOverview: NextPage<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <Wrapper>
      <h1>Movie Overview</h1>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
`;

MovieOverview.getInitialProps = ctx => {
  return { custom: 'custom' };
};

export default MovieOverview;
