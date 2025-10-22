/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import * as React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <Container pl={3} pr={3}>
      {props.children}
    </Container>
  );
}
