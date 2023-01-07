import CenteredContent from './components/template/CenteredContent.template'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import GlobalStyles from './styles/Global.style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <CenteredContent>
      <RouterProvider router={router} />
    </CenteredContent>
  </React.StrictMode>,
)
