import React from 'react';
import styled from 'styled-components';
import { Favorite } from '@styled-icons/material/Favorite';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';

import Tooltip from '@material-ui/core/Tooltip';
import devices from 'shared/media';

interface Props {
  id: string;
  isFavorite: boolean;
  large?: boolean;
  onClick: (id: string) => {};
}

const FavoriteButton = ({ id, isFavorite, large, onClick }: Props) => {
  const onFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(id);
  };

  return (
    <Tooltip title={isFavorite ? 'Remove from favorite' : 'Add to favorite'} disableFocusListener>
      <Wrapper data-testid="favorite-btn" onClick={onFavoriteClick} large={large ? true : false}>
        {isFavorite ? <Favorite size={22} /> : <FavoriteBorder size={22} />}
      </Wrapper>
    </Tooltip>
  );
};

interface WrapperProps {
  large?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-end;
  align-self: ${props => (props.large ? 'center' : 'flex-end')};
  width: min-content;

  padding: ${props => (props.large ? '0' : '8px')};
  margin-right: ${props => (props.large ? '0' : '-8px')};
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  svg {
    color: ${props => props.theme.favoriteColor};
    min-width: ${props => (props.large ? '48px' : '22px')};
    min-height: ${props => (props.large ? '48px' : '22px')};

    @media ${devices.mobileOnly} {
      min-width: ${props => (props.large ? '32px' : '22px')};
      min-height: ${props => (props.large ? '32px' : '22px')};
    }
  }

  &:hover {
    transform: scale(1.25);
    svg {
      color: ${props => props.theme.favoriteColorHover};
    }
  }
`;

export default FavoriteButton;
