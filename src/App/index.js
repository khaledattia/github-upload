import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchTasks } from '@store/tasks/tasks.actions'

import { NavBar } from "@components/NavBar/NavBar";
import ScrollToTop from '@components/ScrollToTop';
import { Layout } from '@components/Layout/Layout'

import { Home } from '@pages/Home/Home';
import { NewTask } from '@pages/NewTask/NewTask';
import { TaskDetails } from '@pages/TaskDetails/TaskDetails';
import { EditTask } from '@pages/EditTask/EditTask';
import { Page404 } from '@pages/Page404'
import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( fetchTasks() )

}, [ dispatch ])

  return (
    <Router>

      <ScrollToTop />
      <NavBar />

      <Layout>
        <Routes>

          <Route 
          path    = "/"        
          element = { <Home /> } />

          <Route 
          path    = "/newtask" 
          element = { <NewTask /> } />

          <Route 
          path    = "/task/:taskId" 
          element = { <TaskDetails  /> } />

          <Route 
          path    = "/edit/:taskId" 
          element = { <EditTask  /> } />

          <Route 
          path    = "/*" 
          element = { <Page404 /> } />


        </Routes>
      </Layout>
      
      
    </Router>
  );
};

export default App;
