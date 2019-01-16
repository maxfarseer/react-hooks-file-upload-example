import React, { useRef } from 'react'
import { upload } from './api'
import T from 'prop-types'

const UploadForm = ({ onUpload }) => {
  const inputEl = useRef(null)

  const _onSuccess = data => {
    onUpload(data.link)
  }

  const _onFailure = () => {
    onUpload(null)
  }

  const handleSubmit = e => {
    e.preventDefault()
    upload(inputEl.current.files[0], _onSuccess, _onFailure)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Select file to upload</label>
      <input ref={inputEl} type="file" />
      <button type="submit">Upload</button>
    </form>
  )
}

Notification.propTypes = {
  onUpload: T.func.isRequired,
}

export { UploadForm }
