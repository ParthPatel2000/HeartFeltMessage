// import { useState } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
import Editor from './components/Editor'
import Viewer from './components/Viewer';

function App() {

  const { pathname } = useLocation();
  return (
    <>
      <div>
        {
          pathname.length > 1 ?
            <div>
              <Viewer />
            </div>
            :
            <div>
              <Editor />
            </div>
        }

      </div>
    </>
  )
}

export default App
