import styled from 'styled-components';
import devices from 'shared/media';
import Chip from '@material-ui/core/Chip';
import { typeScale, typeScaleMobile } from 'shared/typography';

const Wrapper = styled.div`
  width: 100%;
`;

export default Wrapper;

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
    color: ${props => (props.selected ? props.theme.chipSelectedColor : props.theme.textColor)};
    background-color: ${props =>
      props.selected ? props.theme.chipSelectedBGColor : props.theme.chipBGColor};
    min-width: 120px;
    font-size: ${typeScale.helperText};

    flex: 1;

    @media ${devices.tabletOnly} {
      height: 28px;
      padding: 4px 8px;
      min-width: 120px;

      .MuiChip-label {
        font-size: ${typeScale.helperText};
        padding: 8px 32px;
      }
    }

    @media ${devices.mobileOnly} {
      height: 24px;
      margin: 0;
      padding: 2px 4px;
      min-width: 100px;
      .MuiChip-label {
        font-size: ${typeScaleMobile.helperText};
        padding: 8px;
      }
    }
  }

  .MuiChip-icon {
    color: ${props => props.selected && props.theme.interactionColor};
  }

  &.MuiChip-clickable:hover {
    color: ${props => props.selected && props.theme.interactionColor};
    background-color: ${props =>
      props.selected ? props.theme.chipSelectedBGColor : props.theme.chipBGColorHover};
  }

  &.MuiChip-clickable:focus {
    background-color: ${props =>
      props.selected ? props.theme.chipSelectedBGColor : props.theme.chipBGColor};
  }
`;
