import { PropsWithChildren } from 'react';
import ErrorBoundary from '../errors/ErrorBoundary';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <p>Header</p>
      <ErrorBoundary>{children}</ErrorBoundary>
      <p>Footer</p>
    </div>
  );
};

export default Layout;
