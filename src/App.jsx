import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes';

function App() {

  return (
    <div className='dark:bg-slate-800 min-h-screen'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
