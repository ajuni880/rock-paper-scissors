import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }
`;

export const Layout = ({ children }) => (
  <LayoutWrapper>
    <main>
      {children}
    </main>
    <footer>
      <a
        href='https://github.com/ajuni880/rock-paper-scissors'
        target='_blank'
        rel='noopener noreferrer'
      >Github</a>
    </footer>
  </LayoutWrapper>
);

const ContainerStyles = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Container = ({ children }) => (
  <ContainerStyles>{children}</ContainerStyles>
);
