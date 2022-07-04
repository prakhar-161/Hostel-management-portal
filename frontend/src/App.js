import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Room from './pages/Room';
import Student from './pages/Student';
import Staff from './pages/Staff';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import HostelList from './pages/HostelList';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hostels" element={<HostelList />} /> 
        <Route path="/room/:id" element={<Room />} />
        <Route path="/student" element={<Student />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App