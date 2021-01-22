import { makeStyles } from '@material-ui/core';
import SubTitle from 'components/atoms/typography/subtitle';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
    backgroundColor: theme.palette.background.default
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <SubTitle center>© 2020 Sou Fitness</SubTitle>
    </footer>
  );
}
