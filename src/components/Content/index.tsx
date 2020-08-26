import React, { memo } from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Content = memo(({ children }: IProps) => {
  return <ContentContainer>{children}</ContentContainer>;
});

export default Content;
