import Chip from '@material-ui/core/Chip';
import React, { useState } from 'react';
import styled from 'styled-components';
import _orderBy from 'lodash/sortBy';

interface ChipData {
  key: number;
  label: string;
}

interface Props {
  categories: Category[];
  onChipSelect: (categoryId: number) => {};
}

const CategoryFilter = ({ categories, onChipSelect }: Props) => {
  const sortedCategories = _orderBy(categories, 'isSelected').reverse();

  if (categories.length > 0) {
    return (
      <Wrapper>
        {categories.map(cat => (
          // let icon;

          <StyledChip
            key={cat.id}
            label={cat.name}
            clickable
            selected={false}
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
  width: 70%;
`;

interface ChipProps {
  selected: boolean;
}

const StyledChip = styled(Chip)<ChipProps>`
  &.MuiChip-root {
    margin: 0 4px 4px 0;
    height: 48px;
    border-radius: 100px;
    color: ${props => props.selected && props.theme.chipColor};
    background-color: ${props => props.selected && props.theme.chipBGColor};
    min-width: 150px;
    .MuiChip-label {
      font-size: 20px;
      padding: 12px 40px;
    }
  }
`;

export default CategoryFilter;
