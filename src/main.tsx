import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import Route from './app/Route.tsx';
import Home from './components/home/Home.tsx';
import Sidebar from './layout/sidebar/Sidebar.tsx';



const router = createBrowserRouter([
  {
    path:"/",
    Component:Route ,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "/sidebar",
        Component: Sidebar,
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
