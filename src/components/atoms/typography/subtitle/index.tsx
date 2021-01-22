import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  center?: boolean;
}

const SubTitle = ({ children, center }: IProps) => (
  <Typography variant='body1' align={center ? 'center' : 'left'} color='primary'>
    {children}
  </Typography>
);

export default SubTitle;
