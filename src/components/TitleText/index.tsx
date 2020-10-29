import { memo } from 'react';
import styled from 'styled-components';

interface IProps {
  value: string;
}

const TitleStyled = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

const TitleText = memo(({ value }: IProps) => {
  return <TitleStyled>{value}</TitleStyled>;
});

export default TitleText;
