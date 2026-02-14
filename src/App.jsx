import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/timeline" element={<MyTimeline />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateChapter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;