import { makeStyles } from '@material-ui/core';

import ButtonDefault from '../components/button';
import SubTitle from '../components/typography/subtitle';
import Title from '../components/typography/title';

const useStyles = makeStyles(() => ({
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
  content: {},
  buttonContainer: {}
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title center>Bem vindo ao Sou Fitness</Title>
          <SubTitle center>Aqui você encontra os melhores personal trainers do mercado</SubTitle>
        </div>
        <div className={classes.buttonContainer}>
          <ButtonDefault text='Encontre seu personal agora mesmo' />
        </div>
      </div>
    </div>
  );
};
export default Home;
