import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <main className="h-full">{children}</main>;
};

export default Layout;
