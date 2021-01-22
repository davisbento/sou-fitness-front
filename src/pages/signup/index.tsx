import { makeStyles } from '@material-ui/core';
import Title from 'components/atoms/typography/title';

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
  filterContainer: {
    padding: theme.spacing(2)
  }
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <div>
      <Title variant='h3' center>
        Cadastre-se
      </Title>
    </div>
  );
}
