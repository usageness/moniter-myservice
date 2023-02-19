import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>서버 상태 확인</h2>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
