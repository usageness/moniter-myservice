import Layout from 'components/Layout';
import useServerData from 'hooks/useServerData';
import Home from 'pages/Home';
import { ServerContext } from 'store/serverContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <ServerContext.Provider value={useServerData()}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ServerContext.Provider>
      </Layout>
    </Router>
  );
}

export default App;
