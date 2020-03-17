import { useDispatch } from 'react-redux';
import { toggleFavorite } from 'redux/ducks/userDuck/userDuck';
import FavoriteButton from './FavoriteButton';

export interface Props {
  id: string;
  isFavorite: boolean;
  large?: boolean;
}

const FavoriteButtonConnector = ({ id, isFavorite, large }: Props) => {
  const dispatch = useDispatch();

  return (
    <FavoriteButton
      id={id}
      isFavorite={isFavorite}
      large={large}
      onClick={() => dispatch(toggleFavorite(id))}
    />
  );
};

export default FavoriteButtonConnector;
