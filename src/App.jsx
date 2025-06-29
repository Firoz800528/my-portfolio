// src/App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
