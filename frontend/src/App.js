
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';

import SurveyTest from './components/survey/SurveyTest';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import Blog from './components/blog/Blog';
import SinglePost from './components/blog/SinglePost';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  const { isAuthenticated} = useSelector((state)=>state.user)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/survey" element={<SurveyTest />} />
         <Route path="/me" element={isAuthenticated?<Profile />:<Login/>} />
        

     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
