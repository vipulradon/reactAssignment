import './App.css';
import RegisterForm from "./components/register"
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashBoard';
import GetBooks from './components/GetBooks';
import GetBookByID from "./components/GetBookByID"
import {


  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<RegisterForm />}/>
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/dashboard/books" element={<GetBooks />} />
     <Route path="/dashboard/books/:bookId" element={<GetBookByID />} />
     </Routes>
     </BrowserRouter>

      {/* <Home/>
      <RegisterForm />
      <Login/> */}
    </>
  );
}

export default App;
