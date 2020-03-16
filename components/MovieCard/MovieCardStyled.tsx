import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: #fafafa;
    transition: all 0.25s ease-in;
    display: flex;
    height: 100%;
  }

  > .MuiCardMedia-root {
    height: initial;
    max-height: 100%;
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
