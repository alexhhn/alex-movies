import Chip from '@material-ui/core/Chip';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ChipData {
  key: number;
  label: string;
}

interface Props {
  categories: Category[];
}

const CategoryFilter = ({ categories }: Props) => {
  console.log('categories', categories);

  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  if (categories.length > 0) {
    return (
      <Wrapper>
        {categories.map(cat => (
          // let icon;

          <StyledChip
            key={cat.id}
            label={cat.name}
            clickable
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

const StyledChip = styled(Chip)`
  &.MuiChip-root {
    margin: 0 4px 4px 0;
  }
`;

export default CategoryFilter;
