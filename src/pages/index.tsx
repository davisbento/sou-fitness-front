import { makeStyles } from '@material-ui/core';
import ButtonDefault from 'components/atoms/button';
import SubTitle from 'components/atoms/typography/subtitle';
import Title from 'components/atoms/typography/title';
import Footer from 'components/molecules/footer';
import SearchPersonal from 'components/molecules/search-personal';
import SignupPersonal from 'components/molecules/signup-personal';
import { useCallback, useRef } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(/home-image.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '80px 10px'
  },
  spacing: {
    marginTop: theme.spacing(4)
  }
}));

export default function Home() {
  const classes = useStyles();

  const personalRef = useRef<HTMLDivElement>(null);

  const goToPersonal = useCallback(() => personalRef.current.scrollIntoView(), []);

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.mainContainer}>
          <div />
          <div>
            <Title variant='h1' center>
              Bem vindo ao Sou Fitness
            </Title>
            <SubTitle center>Aqui você encontra os melhores personal trainers do mercado</SubTitle>
          </div>
          <div>
            <ButtonDefault onClick={goToPersonal} text='Encontre seu personal agora mesmo' />
          </div>
        </div>
      </div>

      <div className={classes.spacing} ref={personalRef}>
        <SearchPersonal />
      </div>

      <div className={classes.spacing}>
        <SignupPersonal />
      </div>

      <div className={classes.spacing}>
        <Footer />
      </div>
    </div>
  );
}
