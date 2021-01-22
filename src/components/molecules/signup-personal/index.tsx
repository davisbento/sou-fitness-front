import { makeStyles } from '@material-ui/core';
import SubTitle from 'components/atoms/typography/subtitle';
import Title from 'components/atoms/typography/title';
import Link from 'next/link';

interface IProps {}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

export default function SignupPersonal({}: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title center variant='h3'>
        É personal e gostaria de encontrar mais alunos para suas aulas?
      </Title>
      <SubTitle center>
        Se inscreva no{' '}
        <Link href='/signup'>
          <a>link</a>
        </Link>{' '}
        e comece agora mesmo
      </SubTitle>
    </div>
  );
}
