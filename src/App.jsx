import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Process from './pages/Process';
import Solution from './pages/Solution';
import Impact from './pages/Impact';
import Team from './pages/Team';
import Downloads from './pages/Downloads';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/process" element={<Process />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </Layout>
  );
}

export default App;
