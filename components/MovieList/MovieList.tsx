import styled from 'styled-components';
import MovieCard from 'components/MovieCard/MovieCard';

interface Props {
  movies: IMovie[];
}

const MovieList = ({ movies }: Props) => (
  <Wrapper>
    {movies.map(movie => (
      <MovieCard key={movie.id} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: red;
`;

export default MovieList;
