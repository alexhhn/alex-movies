import Chip from '@material-ui/core/Chip';
import React, { useState } from 'react';
import styled from 'styled-components';
import _sortBy from 'lodash/sortBy';
import devices from 'shared/media';

interface Props {
  categories: Category[];
  onChipSelect: (categoryId: number) => {};
}

const CategoryFilter = ({ categories, onChipSelect }: Props) => {
  const selectedCategories = categories.filter(cat => cat.isSelected);
  const unSelectedCategories = categories.filter(cat => !cat.isSelected);

  if (categories.length > 0) {
    return (
      <Wrapper>
        {selectedCategories.map(cat => (
          // let icon;

          <StyledChip
            key={cat.id}
            label={cat.name}
            clickable
            selected={cat.isSelected}
            onClick={() => onChipSelect(cat.id)}
            // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
          />
        ))}

        {unSelectedCategories.map(cat => (
          // let icon;

          <StyledChip
            key={cat.id}
            label={cat.name}
            clickable
            selected={cat.isSelected}
            onClick={() => onChipSelect(cat.id)}
            // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
          />
        ))}
      </Wrapper>
    );
  }

  return <h2>Fetching categories...</h2>;
};

const Wrapper = styled.div`
  @media ${devices.mobileOnly} {
    width: 100%;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    /* flex-wrap: wrap; */
    /* justify-content: space-around; */
  }
`;

interface ChipProps {
  selected: boolean;
}

const StyledChip = styled(Chip)<ChipProps>`
  &.MuiChip-root {
    margin: 0 4px 8px 0;
    height: 32px;
    border-radius: 100px;
    color: ${props => props.selected && props.theme.chipColor};
    background-color: ${props => props.selected && props.theme.chipBGColor};
    min-width: 120px;
    font-size: 16px;

    @media ${devices.tabletOnly} {
      height: 28px;
      padding: 4px 8px;
      min-width: 120px;

      .MuiChip-label {
        font-size: 16px;
        padding: 8px 32px;
      }
    }

    @media ${devices.mobileOnly} {
      height: 24px;
      margin: 0;
      padding: 2px 4px;
      min-width: 100px;
      .MuiChip-label {
        font-size: 12px;
        padding: 8px;
      }
    }
  }

  &.MuiChip-clickable:hover {
    background-color: ${props => props.selected && props.theme.chipBGColorHover};
    color: ${props => props.selected && props.theme.interactionColor};
  }
`;

export default CategoryFilter;
