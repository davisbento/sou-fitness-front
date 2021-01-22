import { makeStyles } from '@material-ui/core';
import { Form } from 'formik';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const useStyles = makeStyles(() => ({
  form: {}
}));

export default function FormBase({ children }: IProps) {
  const classes = useStyles();
  return <Form className={classes.form}>{children}</Form>;
}
