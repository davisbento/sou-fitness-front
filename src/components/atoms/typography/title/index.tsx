import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  center?: boolean;
  variant: 'h1' | 'h2' | 'h3';
}

const Title = ({ children, center, variant }: IProps) => (
  <Typography variant={variant} align={center ? 'center' : 'left'} color='primary'>
    {children}
  </Typography>
);

export default Title;
