import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const pathandelements = [
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<AboutPage/>
    }
  ]

  const navpaths = new createBrowserRouter(pathandelements);

  return (
    <div className="App">
       <RouterProvider router={navpaths}>Router</RouterProvider>
    </div>
  );
}

export default App;
