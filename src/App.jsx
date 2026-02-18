import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MyTimeline from './pages/MyTimeline';
import Profile from './pages/Profile';
import CreateChapter from './pages/CreateChapter';
import Login from './auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/explore" element={<Layout><Explore /></Layout>} />
        <Route path="/timeline" element={<Layout><MyTimeline /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/create" element={<CreateChapter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
