import React from 'react';
import _sortBy from 'lodash/sortBy';
import { Favorite } from '@styled-icons/material/Favorite';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Done } from '@styled-icons/material/Done';
import Tooltip from '@material-ui/core/Tooltip';
import { Wrapper, ClickableSpan, StyledChip, CategorySelection } from './CategoryFilterStyled';

interface Props {
  categories: Category[];
  selectedCategories: string[];
  onChipSelect: (categoryId: number) => {};
  onFavoriteChipSelect: () => {};
  onClearSelection: () => void;
}

const CategoryFilter = ({
  categories,
  selectedCategories,
  onChipSelect,
  onFavoriteChipSelect,
  onClearSelection,
}: Props) => {
  const showFavorites = useSelector((state: RootState) => state.user.showFavorites);
  const favorites = useSelector((state: RootState) => state.user.favorites);
  const hasFavorites = favorites.length > 0;

  if (categories.length > 0) {
    return (
      <Wrapper>
        <Tooltip
          title={
            hasFavorites
              ? showFavorites
                ? 'Hide favorites'
                : 'Show favorite movies'
              : 'You do not have any favorite movies'
          }
          disableFocusListener
        >
          <ClickableSpan>
            <StyledChip
              key={'favorites'}
              icon={<Favorite size={20} />}
              clickable
              selected={showFavorites}
              label={'Favorite'}
              onClick={() => onFavoriteChipSelect()}
              disabled={hasFavorites ? false : true}
            />
          </ClickableSpan>
        </Tooltip>
        <CategorySelection>
          <StyledChip
            key={'-1'}
            label={'All movies'}
            clickable
            selected={selectedCategories.length === 0 && !showFavorites}
            onClick={() => onClearSelection()}
          />
          {categories.map(cat => (
            <StyledChip
              key={cat.id}
              label={cat.name}
              clickable
              icon={cat.isSelected ? <Done size={20} /> : undefined}
              selected={cat.isSelected}
              onClick={() => onChipSelect(cat.id)}
            />
          ))}
        </CategorySelection>
      </Wrapper>
    );
  }

  return <h2>Fetching categories...</h2>;
};

export default CategoryFilter;
