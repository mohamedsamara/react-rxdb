import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RxDatabase } from 'rxdb';
import { Provider } from 'rxdb-hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'styles/index.css';
import Routes from 'routes';
import { initialize } from 'lib/models';

const queryClient = new QueryClient();

const Root = () => {
  const [db, setDb] = useState<RxDatabase>();

  useEffect(() => {
    initialize().then(setDb);
  }, []);

  return (
    <Provider db={db}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
