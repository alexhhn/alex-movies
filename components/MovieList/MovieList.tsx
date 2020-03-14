import styled from 'styled-components';
import MovieCard from 'components/MovieCard/MovieCard';

interface Props {
  movies: IMovie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <Wrapper>
      {movies.map((movie, i) => (
        <MovieCard key={i} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
`;

export default MovieList;
