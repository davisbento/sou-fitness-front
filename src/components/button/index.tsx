import Button from '@material-ui/core/Button';

interface IProps {
  text: string;
  onClick: () => void;
}

const ButtonDefault = ({ text, onClick }: IProps) => (
  <Button onClick={onClick} variant='contained' color='primary'>
    {text}
  </Button>
);

export default ButtonDefault;
