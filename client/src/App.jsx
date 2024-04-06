import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import PrivateRoutes from './components/PrivateRoute';
import Home from "./pages/Home";
import Dbms from './pages/Dbms';
import Ca from './pages/Ca';
import QuizPage from './pages/QuizPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dbms" element={<Dbms />} />
        <Route path="/ca" element={<Ca />} />
        <Route path="/quizpage" element={<QuizPage />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App;