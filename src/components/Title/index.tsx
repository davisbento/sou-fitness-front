import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Title = ({ children }: IProps) => (
  <div>
    <Typography variant='h1' color='primary'>
      {children}
    </Typography>
  </div>
);

export default Title;
