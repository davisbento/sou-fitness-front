import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { colors } from 'theme';

interface IProps {
  text: string;
}
const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: colors.buttonDefault,
    color: '#fff'
  }
}));
export default function FormButton({ text }: IProps) {
  const classes = useStyles();
  return (
    <Button color='primary' className={classes.button} type='submit'>
      {text}
    </Button>
  );
}
