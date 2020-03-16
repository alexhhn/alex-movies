import styled from 'styled-components';
import MovieCard from 'components/MovieCard/MovieCard';
import devices from 'shared/media';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useRouter } from 'next/router';

interface Props {
  movies: IMovie[];
  onClearSelection: () => void;
}

const MovieList = ({ movies, onClearSelection }: Props) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/moviedetails?id=${id}`);
  };

  const favorites = useSelector((state: RootState) => state.user.favorites);

  if (movies.length === 0) {
    return (
      <NoMovieView>
        <p>No movies currently available with these filters :(</p>
        <button onClick={() => onClearSelection()}>Clear filter</button>
      </NoMovieView>
    );
  }
  return (
    <Wrapper>
      {movies.map(movie => {
        const isFavorite = favorites.includes(movie.id) ? true : false;

        return (
          <MovieCard
            key={movie.id}
            movieData={movie}
            isFavorite={isFavorite}
            handleClick={handleClick}
          />
        );
      })}
    </Wrapper>
  );
};

const NoMovieView = styled.div`
  margin-top: 40px;
  font-size: 20px;
`;

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
