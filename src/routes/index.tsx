import { useRoutes } from 'react-router-dom';

import Home from 'pages/Home';

const Routes = () => {
  const element = useRoutes([{ path: '/', element: <Home /> }]);

  return element;
};

export default Routes;
