import React from 'react';
import { usePage } from '../hooks';

interface WithPageProps {
  pageCurrent: number;
  changePage: (page: number) => void;
}

const withPage = <P extends object>(WrappedComponent: React.ComponentType<P & WithPageProps>) => {
  return (props: P) => {
    const { pageCurrent, changePage } = usePage();

    return (
      <WrappedComponent
        {...props}
        pageCurrent={pageCurrent}
        changePage={changePage}
      />
    );
  };
};

export default withPage;