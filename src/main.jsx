import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './main.css'
import { Provider } from 'react-redux'
import prortfolioStore from './store/MainStore.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import HomePage from './routes/HomePage.jsx'
import Qualification from './components/Qualification.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:
      [
        { path: '/home', element: <HomePage /> },
        { path: '/', element: <HomePage /> },
        { path: '/about', element: <About /> },
        { path: '/skills', element: <Skills /> },
        { path: '/qualifications', element: <Qualification /> },
        { path: '/contact', element: <Contact /> },
        { path: '/projects', element: <Projects /> },
      ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={prortfolioStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
