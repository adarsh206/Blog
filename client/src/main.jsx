
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import SingleBlog from './pages/blogs/SingleBlog';
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
