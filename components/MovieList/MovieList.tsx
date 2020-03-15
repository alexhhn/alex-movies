import styled from 'styled-components';
import MovieCard from 'components/MovieCard/MovieCard';
import devices from 'shared/media';

interface Props {
  movies: IMovie[];
}

const MovieList = ({ movies }: Props) => (
  <Wrapper>
    {movies.map(movie => (
      <MovieCard key={movie.id} {...movie} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  @media ${devices.laptopOnly} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }

  @media ${devices.mobileOnly} {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 24px;
  }
`;

export default MovieList;
