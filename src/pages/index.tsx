import { makeStyles } from '@material-ui/core';

import ButtonDefault from '../components/button';
import SearchPersonal from '../components/search-personal';
import SubTitle from '../components/typography/subtitle';
import Title from '../components/typography/title';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(/home-image.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '80px 10px'
  },
  filterContainer: {
    padding: theme.spacing(2)
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.container}>
          <div>
            <Title center>Bem vindo ao Sou Fitness</Title>
            <SubTitle center>Aqui você encontra os melhores personal trainers do mercado</SubTitle>
          </div>
          <div>
            <ButtonDefault text='Encontre seu personal agora mesmo' />
          </div>
        </div>
      </div>

      <div className={classes.filterContainer}>
        <SearchPersonal />
      </div>
    </div>
  );
};
export default Home;
