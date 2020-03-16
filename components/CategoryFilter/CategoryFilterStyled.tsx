import styled from 'styled-components';
import devices from 'shared/media';
import Chip from '@material-ui/core/Chip';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ClickableSpan = styled.span`
  min-width: 120px;
  display: flex;
  width: max-content;
`;

export const CategorySelection = styled.div`
  @media ${devices.mobileOnly} {
    margin-top: 8px;
    width: 100%;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

interface ChipProps {
  selected: boolean;
}

export const StyledChip = styled(Chip)<ChipProps>`
  &.MuiChip-root {
    margin: 0 4px 8px 0;
    height: 32px;
    border-radius: 100px;
    color: ${props => props.selected && props.theme.chipColor};
    background-color: ${props => props.selected && props.theme.chipBGColor};
    min-width: 120px;
    font-size: 16px;

    flex: 1;

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

  .MuiChip-icon {
    color: ${props => props.selected && props.theme.interactionColor};
  }

  &.MuiChip-clickable:hover {
    background-color: ${props => props.selected && props.theme.chipBGColorHover};
    color: ${props => props.selected && props.theme.interactionColor};
  }

  &.MuiChip-clickable:focus {
    background-color: ${props => props.selected && props.theme.chipBGColorHover};
  }
`;
