import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  center?: boolean;
}

const Title = ({ children, center }: IProps) => (
  <div>
    <Typography variant='h1' align={center ? 'center' : 'left'} color='primary'>
      {children}
    </Typography>
  </div>
);

export default Title;
