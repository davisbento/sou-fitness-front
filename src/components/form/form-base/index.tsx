import { makeStyles } from '@material-ui/core';
import { Form } from 'formik';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

export default function FormBase({ children }: IProps) {
  const classes = useStyles();
  return <Form className={classes.form}>{children}</Form>;
}
