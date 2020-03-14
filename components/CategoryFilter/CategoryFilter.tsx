import Chip from '@material-ui/core/Chip';
import React, { useState } from 'react';

interface ChipData {
  key: number;
  label: string;
}

const CategoryFilter = () => {
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

  return (
    <>
      {chipData.map(data => {
        let icon;

        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={data.label === 'React' ? undefined : handleDelete(data)}
          />
        );
      })}
    </>
  );
};

export default CategoryFilter;
