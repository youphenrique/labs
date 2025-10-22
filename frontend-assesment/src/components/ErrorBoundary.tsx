/** @jsx jsx */
import { jsx, Flex, Badge } from 'theme-ui';
import * as React from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, errorInfo: React.ErrorInfo) {
    console.log(errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          mt={5}
          px={2}
          sx={{
            width: 'full',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Badge
            bg="gray.3"
            color="gray.7"
            sx={{ borderRadius: 'full', fontSize: 0 }}
          >
            Something went wrong
          </Badge>
        </Flex>
      );
    }

    return this.props.children;
  }
}
