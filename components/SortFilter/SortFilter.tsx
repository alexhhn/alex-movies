import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { sortValues, sortValuesIds } from 'shared/constants';
import devices from 'shared/media';

interface Props {
  onSortItemSelect: (sortItemId: string) => {};
}

export const SortFilter = ({ onSortItemSelect }: Props) => {
  const [value, setValue] = useState(sortValuesIds.acsendingId);

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
  margin-left: 50px;
  @media ${devices.mobileOnly} {
    margin-top: 18px;
    strong {
      text-align: end;
      font-size: 14px;
      margin-right: 2px;
    }
  }
`;

const StyledSelect = styled(Select)`
  margin-top: 6px;
  height: 40px;
  .MuiInputBase-input {
    font-size: 16px;
  }
  .MuiSvgIcon-root {
    fill: blue;
    width: 26px;
    height: 26px;
  }

  &.MuiInput-underline::before {
    border-bottom: 1px solid blue;
  }

  .MuiSelect-selectMenu {
    min-width: 150px;
  }

  @media ${devices.mobileOnly} {
    height: 24px;
    max-width: 180px;
    align-self: flex-end;
    .MuiInputBase-input {
      font-size: 12px;
    }
    .MuiSvgIcon-root {
      width: 16px;
      height: 16px;
    }
  }
`;
export default SortFilter;
