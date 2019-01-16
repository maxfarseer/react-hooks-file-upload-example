import React, { useState } from 'react'
import { UploadForm } from './UploadForm'
import { Notification } from './Notification'
import { List } from './List'
import './App.css'

const INITIAL_STATUS = ''
const UPLOAD_SUCCESS = 'File was uploaded'
const UPLOAD_FAILED = 'File upload failed'

const App = () => {
  const [status, setStatus] = useState(INITIAL_STATUS)
  const [uploadedFiles, updateList] = useState([])

  const onUpload = path => {
    if (path) {
      setStatus(UPLOAD_SUCCESS)
      updateList(uploadedFiles.concat(path))
    } else {
      setStatus(UPLOAD_FAILED)
    }
  }

  return (
    <div className="container">
      <p>React-hooks upload example</p>
      <Notification status={status} />
      <UploadForm onUpload={onUpload} />
      <List data={uploadedFiles} />
    </div>
  )
}

export { App }
