import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { sortValues } from 'shared/constants';

interface Props {
  onSortItemSelect: (sortItemId: string) => {};
}

export const SortFilter = ({ onSortItemSelect }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  useEffect(() => {
    if (value.length > 0) {
      onSortItemSelect(value);
    }
  }, [value]);

  return (
    <Wrapper>
      <strong>Sortby</strong>
      <StyledSelect displayEmpty value={value} onChange={handleChange}>
        <MenuItem value="None">
          <em>None</em>
        </MenuItem>
        {sortValues.map(value => {
          return (
            <MenuItem key={value.id} value={value.id}>
              {value.property}
            </MenuItem>
          );
        })}
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled(Select)`
  width: 100px;
  height: 50px;
`;
export default SortFilter;
