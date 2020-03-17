import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import devices from 'shared/media';

const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: ${props => props.theme.cardBGColor};
    transition: all 0.25s ease-in;
    display: flex;
    height: 100%;
    color: ${props => props.theme.textColor};
  }

  > .MuiCardMedia-root {
    height: initial;

    @media ${devices.mobileOnly} {
      height: 100%;
      max-height: 300px;
    }

    width: 40%;
  }

  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

export default CardWrapper;

export const Content = styled(CardContent)`
  &.MuiCardContent-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 60%;
  }

  &.MuiCardContent-root:last-child {
    padding-bottom: 10px;
  }
`;

export const Meta = styled.div`
  align-items: flex-end;
`;
