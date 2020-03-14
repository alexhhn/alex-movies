import styled from 'styled-components';
import MovieCard from 'components/MovieCard/MovieCard';

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
  display: flex;
  flex-wrap: wrap;
`;

export default MovieList;
