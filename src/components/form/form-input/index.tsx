import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';
import { Fragment } from 'react';

interface IProps {
  label: string;
  name: string;
}

export default function FormInput({ label, name }: IProps) {
  const [field, meta] = useField(name);

  return (
    <Fragment>
      <TextField error={meta.error && meta.touched} {...field} label={label} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </Fragment>
  );
}
