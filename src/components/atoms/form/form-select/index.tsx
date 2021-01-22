import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useField } from 'formik';

export interface IOptions {
  value: string | number;
  label: string;
}

interface IProps {
  label: string;
  name: string;
  options: IOptions[];
}

export default function FormSelect({ label, name, options = [] }: IProps) {
  const [field, meta] = useField(name);

  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select fullWidth id={name} labelId={name} name={name} error={meta.error && meta.touched} {...field}>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {meta.error && meta.touched && <FormHelperText>{meta.error}</FormHelperText>}
    </div>
  );
}
