import React from 'react'
import { UploadForm } from './UploadForm'
import { Notification } from './Notification'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <p>React-hooks upload example</p>
      <Notification />
      <UploadForm />
    </div>
  )
}

export { App }
