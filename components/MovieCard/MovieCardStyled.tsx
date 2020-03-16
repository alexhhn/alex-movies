import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: #fafafa;
    transition: all 0.25s ease-in;
    display: flex;
    height: 100%;
  }

  > .MuiCardMedia-root {
    height: initial;
    width: 40%;
  }

  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const FavoriteButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  width: min-content;
  padding: 8px;
  margin-right: -8px;
  transition: all 0.25s ease-in-out;

  svg {
    color: ${props => props.theme.favoriteColor};
    min-width: 22px;
    min-height: 22px;
  }

  &:hover {
    transform: scale(1.25);
    svg {
      fill: darkred;
    }
  }
`;

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
