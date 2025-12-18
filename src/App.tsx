// import { useState } from 'react'
import './App.css'
// import Editor from './Components/Editor'
import { useLocation } from 'react-router-dom'
// import Viewer from './Components/Viewer';

function App() {

  const { pathname } = useLocation();
  return (
    <>
      <div>
        {
          pathname.length > 1 ?
            <div>
              Viewer Mode
            </div>
            :
            <div>
              Editor Mode
            </div>
        }

      </div>
    </>
  )
}

export default App
