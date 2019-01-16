import React, { useRef } from 'react'

const UploadForm = () => {
  const inputEl = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputEl.current.files)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Select file to upload</label>
      <input ref={inputEl} type="file" />
      <button type="submit">Upload</button>
    </form>
  )
}

export { UploadForm }
