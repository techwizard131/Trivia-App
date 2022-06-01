import React from 'react';
import { MainLayoutContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <MainLayoutContainer className="main-layout">
      <div className="header"></div>
      <div className="main-content">{children}</div>
      <div className="footer"></div>
    </MainLayoutContainer>
  );
}
