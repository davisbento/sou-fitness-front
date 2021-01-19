import Button from '@material-ui/core/Button';

interface IProps {
  text: string;
}

const ButtonDefault = ({ text }: IProps) => (
  <Button variant='contained' color='primary' href='#search-personal'>
    {text}
  </Button>
);

export default ButtonDefault;
