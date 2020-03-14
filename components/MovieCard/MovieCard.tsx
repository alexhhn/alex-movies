import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

const MovieCard = () => {
  return (
    <CardWrapper>
      <CardTitle>efe</CardTitle>
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  padding: 20px;

  &.MuiPaper-root {
    color: ${props => props.theme.primary};
  }
`;

const CardTitle = styled.h2`
  /* color: ${props => props.theme.primary}; */
`;

export default MovieCard;
