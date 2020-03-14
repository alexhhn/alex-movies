import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const MovieCard = () => {
  return (
    <CardWrapper>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <div>score imdb year time</div>
        <p>description</p>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
        <p>Favorite icon</p>
      </CardContent>
      {/* </CardActionArea> */}
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  &.MuiPaper-root {
    background-color: #fafafa;
    transition: all 0.25s ease-in;
    /* color: ${props => props.theme.primary}; */
    display:flex;
  }

  > .MuiCardMedia-root{
    height:auto;
    max-width: 200px;
  }
  
  cursor: pointer;

  &:hover {
    transform: scale(1.025) ;
  }
`;

export default MovieCard;
