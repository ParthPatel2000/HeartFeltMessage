// import { useState } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
import Editor from './components/Editor'
import Viewer from './components/Viewer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

function App() {

  const theme = useSelector((state: RootState) => state.theme)
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
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
